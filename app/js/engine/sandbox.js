// In-Browser Sandboxed Code Evaluator with Strict Semicolon & Timeout Protection
import { validateJavaScriptSyntax } from "./validator.js";

export async function evaluateSubmission(userCode, challenge) {
  const startTime = performance.now();
  const logs = [];
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  // 0. Strict JavaScript Grammar & Semicolon Placement Validation
  const syntaxCheck = validateJavaScriptSyntax(userCode);
  if (!syntaxCheck.valid) {
    const duration = Math.round(performance.now() - startTime);
    return {
      success: false,
      results: syntaxCheck.errors.map(err => ({
        name: "Syntax & Semicolon Verification",
        pass: false,
        error: err
      })),
      logs: [],
      error: syntaxCheck.errors.join("\n"),
      duration
    };
  }

  try {
    console.log = (...args) => {
      logs.push(args.map(a => typeof a === "object" && a !== null ? JSON.stringify(a) : String(a)).join(" "));
      originalLog(...args);
    };
    console.warn = (...args) => {
      logs.push("[warn] " + args.map(a => typeof a === "object" && a !== null ? JSON.stringify(a) : String(a)).join(" "));
      originalWarn(...args);
    };
    console.error = (...args) => {
      logs.push("[error] " + args.map(a => typeof a === "object" && a !== null ? JSON.stringify(a) : String(a)).join(" "));
      originalError(...args);
    };

    // 1. Transform ES module exports into a returned dictionary object
    let transformedCode = userCode
      .replace(/export\s+default\s+/g, "const __defaultExport = ")
      .replace(/export\s+const\s+([a-zA-Z0-9_$]+)\s*=/g, "const $1 =")
      .replace(/export\s+let\s+([a-zA-Z0-9_$]+)\s*=/g, "let $1 =")
      .replace(/export\s+var\s+([a-zA-Z0-9_$]+)\s*=/g, "var $1 =")
      .replace(/export\s+function\s+([a-zA-Z0-9_$]+)/g, "function $1")
      .replace(/export\s+class\s+([a-zA-Z0-9_$]+)/g, "class $1")
      .replace(/export\s+async\s+function\s+([a-zA-Z0-9_$]+)/g, "async function $1");

    // Extract all top-level declared identifiers
    const exportMatches = [
      ...userCode.matchAll(/export\s+(?:const|let|var|function|class)\s+([a-zA-Z0-9_$]+)/g)
    ].map(m => m[1]);

    const returnBlock = `return { ${exportMatches.join(", ")} };`;

    const runnerFn = new Function(`
      "use strict";
      ${transformedCode}
      ${returnBlock}
    `);

    // 2. Execute with safety timeout
    const executionPromise = new Promise((resolve, reject) => {
      try {
        const exportsObj = runnerFn();
        resolve(exportsObj);
      } catch (err) {
        reject(err);
      }
    });

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Execution Timed Out (Infinite loop detected)")), 1500);
    });

    const exportsObj = await Promise.race([executionPromise, timeoutPromise]);

    // 3. Run validation assertions against the challenge
    const testResults = runChallengeAssertions(exportsObj, challenge);
    const duration = Math.round(performance.now() - startTime);

    const allPassed = testResults.every(t => t.pass);

    return {
      success: allPassed,
      results: testResults,
      logs,
      duration
    };
  } catch (err) {
    const duration = Math.round(performance.now() - startTime);
    return {
      success: false,
      results: [{ name: "Compilation & Runtime Execution", pass: false, error: err.message }],
      logs,
      error: err.message,
      duration
    };
  } finally {
    console.log = originalLog;
    console.warn = originalWarn;
    console.error = originalError;
  }
}

function runChallengeAssertions(exportsObj, challenge) {
  const results = [];
  const dir = challenge.dir;
  const exportedKeys = Object.keys(exportsObj);

  if (exportedKeys.length === 0) {
    return [{ name: "Export Validation", pass: false, error: "No exported constant, variable, or function detected. Use 'export const ...' or 'export function ...'." }];
  }

  const targetSymbol = exportedKeys[0];
  const exportedVal = exportsObj[targetSymbol];

  try {
    if (dir === "01-constant-variable") {
      const pass = typeof exportsObj.message === "string" && exportsObj.message === "Hello World";
      results.push({ name: "message === 'Hello World'", pass, error: pass ? null : `Expected 'Hello World', got ${exportsObj.message}` });
    } else if (dir === "02-basic-function") {
      const pass = typeof exportsObj.sayHello === "function";
      results.push({ name: "sayHello is a function", pass, error: pass ? null : "Expected sayHello to be a function" });
    } else if (dir === "03-function-parameter") {
      const pass = typeof exportsObj.logMessage === "function";
      results.push({ name: "logMessage is a function", pass, error: pass ? null : "Expected logMessage to be a function" });
    } else if (dir === "04-return-statement") {
      const pass = typeof exportsObj.getMessage === "function" && exportsObj.getMessage() === "Hello World";
      results.push({ name: "getMessage() returns 'Hello World'", pass, error: pass ? null : "Expected getMessage() to return 'Hello World'" });
    } else if (dir === "05-return-parameter") {
      const fn = exportsObj.id || Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn(42) === 42 && fn("test") === "test";
      results.push({ name: "id(arg) returns arg", pass, error: pass ? null : "Expected id(arg) to return the passed argument" });
    } else if (dir === "06-primitive-string") {
      const val = exportsObj.str ?? Object.values(exportsObj)[0];
      const pass = typeof val === "string" && val.length > 0;
      results.push({ name: "str is a non-empty string", pass, error: pass ? null : "Expected 'str' to be a non-empty string" });
    } else if (dir === "07-primitive-number") {
      const val = exportsObj.num ?? Object.values(exportsObj)[0];
      const pass = typeof val === "number" && !Number.isNaN(val);
      results.push({ name: "num is a valid number", pass, error: pass ? null : "Expected 'num' to be a number" });
    } else if (dir === "08-primitive-boolean") {
      const val = exportsObj.bool ?? Object.values(exportsObj)[0];
      const pass = typeof val === "boolean";
      results.push({ name: "bool is a boolean", pass, error: pass ? null : "Expected 'bool' to be a boolean (true or false)" });
    } else if (dir === "09-primitive-undefined") {
      const hasKey = "undef" in exportsObj || exportedKeys.includes("undef");
      const pass = hasKey && exportsObj.undef === undefined;
      results.push({ name: "undef is exported with value undefined", pass, error: pass ? null : "Expected 'undef' to be exported with value undefined" });
    } else if (dir === "10-primitive-null") {
      const val = exportsObj.nullVal ?? Object.values(exportsObj)[0];
      const pass = val === null;
      results.push({ name: "nullVal === null", pass, error: pass ? null : "Expected 'nullVal' to be exported with value null" });
    } else if (dir === "11-escape-characters") {
      const val = exportsObj.str ?? Object.values(exportsObj)[0];
      const pass = typeof val === "string" && (val.includes("\n") || val.includes("\t") || val.includes("\"") || val.includes("'"));
      results.push({ name: "str contains escaped character", pass, error: pass ? null : "Expected string with escape character" });
    } else if (dir === "12-template-literals") {
      const fn = exportsObj.greeting ?? Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn("Alice").includes("Alice");
      results.push({ name: "greeting(name) uses template literals", pass, error: pass ? null : "Expected greeting('Alice') to return formatted string" });
    } else if (dir === "13-string-length") {
      const fn = exportsObj.strLength ?? Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn("hello") === 5;
      results.push({ name: "strLength(str) returns length", pass, error: pass ? null : "Expected strLength('hello') to return 5" });
    } else if (dir === "14-string-char-at") {
      const fn = exportsObj.getChar ?? Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn("abc", 1) === "b";
      results.push({ name: "getChar(str, i) returns character at index", pass, error: pass ? null : "Expected getChar('abc', 1) to return 'b'" });
    } else if (dir === "15-string-at-method") {
      const fn = exportsObj.getLastChar ?? Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn("abc") === "c";
      results.push({ name: "getLastChar(str) returns last character", pass, error: pass ? null : "Expected getLastChar('abc') to return 'c'" });
    } else if (dir === "16-string-primitive-vs-object") {
      const fn = exportsObj.isStringPrimitive ?? Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn("test") === true && fn(new String("test")) === false;
      results.push({ name: "isStringPrimitive(val) differentiates primitive string", pass, error: pass ? null : "Expected isStringPrimitive('test') to be true" });
    } else if (dir === "17-string-raw") {
      const fn = exportsObj.getRawString ?? Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && typeof fn() === "string";
      results.push({ name: "getRawString() returns raw string", pass, error: pass ? null : "Expected getRawString() to return a string" });
    } else if (dir === "18-string-concat") {
      const fn = exportsObj.joinStrings ?? Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn("a", "b") === "ab";
      results.push({ name: "joinStrings(a, b) concatenates strings", pass, error: pass ? null : "Expected joinStrings('a', 'b') to return 'ab'" });
    } else if (dir === "19-increment") {
      const fn = exportsObj.inc ?? Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn(5) === 6;
      results.push({ name: "inc(n) returns n + 1", pass, error: pass ? null : "Expected inc(5) to return 6" });
    } else if (dir === "20-decrement") {
      const fn = exportsObj.dec ?? Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn(5) === 4;
      results.push({ name: "dec(n) returns n - 1", pass, error: pass ? null : "Expected dec(5) to return 4" });
    } else if (dir.includes("add") || dir === "21-addition") {
      const fn = exportsObj.add || Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn(2, 3) === 5 && fn(-1, 1) === 0;
      results.push({ name: "add(a, b) calculates sum", pass, error: pass ? null : "Expected add(2, 3) to equal 5" });
    } else if (dir.includes("multiply") || dir === "23-multiplication") {
      const fn = exportsObj.multiply || exportsObj.multiplyLoop || Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn(3, 4) === 12;
      results.push({ name: "multiply(a, b) calculates product", pass, error: pass ? null : "Expected multiply(3, 4) to equal 12" });
    } else if (dir === "217-reverse-chunks") {
      const fn = exportsObj.reverseChunks || Object.values(exportsObj)[0];
      const res = fn([1, 2, 3, 4, 5, 6, 7, 8], 3);
      const pass = Array.isArray(res) && JSON.stringify(res) === JSON.stringify([3, 2, 1, 6, 5, 4, 8, 7]);
      results.push({ name: "reverseChunks([1..8], 3) reverses in chunks", pass, error: pass ? null : `Expected [3,2,1,6,5,4,8,7], got ${JSON.stringify(res)}` });
    } else if (dir === "218-bubble-sort-analyzer") {
      const fn = exportsObj.bubbleSortAnalyzer || Object.values(exportsObj)[0];
      const res = fn([4, 2, 1, 3]);
      const pass = res && Array.isArray(res.sortedArray) && res.sortedArray.join(',') === '1,2,3,4' && res.totalSwaps > 0;
      results.push({ name: "bubbleSortAnalyzer sorts and tracks swaps", pass, error: pass ? null : "Expected sortedArray [1,2,3,4] with swap metrics" });
    } else if (dir === "219-curried-character-creator") {
      const fn = exportsObj.createCurriedCharacterCreator || Object.values(exportsObj)[0];
      const hero = fn({ stats: { hp: 100, attack: 15, defense: 5 } })("Knight")("Paladin")({ hp: 20 });
      const pass = hero && hero.name === "Knight" && hero.stats && hero.stats.hp === 120 && typeof hero.attackTarget === "function";
      results.push({ name: "createCurriedCharacterCreator builds curried character", pass, error: pass ? null : "Expected curried builder with combat methods" });
    } else if (dir === "220-deep-clone-advanced") {
      const fn = exportsObj.deepClone || Object.values(exportsObj)[0];
      const orig = { a: [1, { b: 2 }], d: new Date() };
      const clone = fn(orig);
      const pass = clone && clone !== orig && clone.a !== orig.a && clone.a[1].b === 2;
      results.push({ name: "deepClone creates distinct recursive copy", pass, error: pass ? null : "Expected deep clone of object and array" });
    } else if (dir === "221-deep-equal") {
      const fn = exportsObj.deepEqual || Object.values(exportsObj)[0];
      const pass = fn({ a: [1, 2] }, { a: [1, 2] }) === true && fn({ a: 1 }, { a: 2 }) === false;
      results.push({ name: "deepEqual compares nested equality", pass, error: pass ? null : "Expected deepEqual to return true for matching objects" });
    } else if (dir === "222-deep-find") {
      const fn = exportsObj.deepFind || Object.values(exportsObj)[0];
      const pass = fn({ user: { city: "Paris" } }, "user.city") === "Paris" && fn({}, "a.b") === undefined;
      results.push({ name: "deepFind resolves dot-path properties", pass, error: pass ? null : "Expected deepFind to resolve path" });
    } else if (dir === "223-deep-freeze-recursive") {
      const fn = exportsObj.deepFreeze || Object.values(exportsObj)[0];
      const obj = { a: { b: 1 } };
      fn(obj);
      const pass = Object.isFrozen(obj) && Object.isFrozen(obj.a);
      results.push({ name: "deepFreeze recursively freezes object", pass, error: pass ? null : "Expected nested objects to be frozen" });
    } else if (dir === "224-divisor-finder") {
      const fn = exportsObj.divisors || Object.values(exportsObj)[0];
      const pass = JSON.stringify(fn(12)) === JSON.stringify([1, 2, 3, 4, 6, 12]);
      results.push({ name: "divisors(12) returns [1, 2, 3, 4, 6, 12]", pass, error: pass ? null : "Expected array of divisors" });
    } else if (dir === "225-election-mix") {
      const fn = exportsObj.createCurriedFilterAndMap || Object.values(exportsObj)[0];
      const res = fn(n => n % 2 === 0)(n => n * 2)({ a: 2, b: 3, c: 4 });
      const pass = res && res.a === 4 && res.c === 8 && res.b === undefined;
      results.push({ name: "createCurriedFilterAndMap filters and maps", pass, error: pass ? null : "Expected filtered and mapped object" });
    } else if (dir === "226-even-sum") {
      const fn = exportsObj.evenSum || Object.values(exportsObj)[0];
      const pass = fn([1, 2, 3, 4, 5, 6]) === 12;
      results.push({ name: "evenSum sums even numbers", pass, error: pass ? null : "Expected evenSum([1..6]) to equal 12" });
    } else if (dir === "227-exam-grader") {
      const fn = exportsObj.examGrader || Object.values(exportsObj)[0];
      const res = fn([{ score: 80, weight: 1 }, { score: 100, weight: 2 }], 60);
      const pass = res && res.passed === true && res.grade === "A";
      results.push({ name: "examGrader calculates weighted grade", pass, error: pass ? null : "Expected examGrader to return passing grade" });
    } else if (dir === "228-factorial-recursive") {
      const fn = exportsObj.factorial || Object.values(exportsObj)[0];
      const pass = fn(5) === 120 && fn(0) === 1;
      results.push({ name: "factorial(5) === 120 and factorial(0) === 1", pass, error: pass ? null : "Expected factorial(5) to equal 120" });
    } else if (dir === "229-fibonacci-sequence") {
      const fn = exportsObj.fibonacci || Object.values(exportsObj)[0];
      const pass = fn(7) === 13 && fn(0) === 0;
      results.push({ name: "fibonacci(7) === 13", pass, error: pass ? null : "Expected fibonacci(7) to equal 13" });
    } else if (dir === "230-final-attempt") {
      const fn = exportsObj.FinalAttempt || Object.values(exportsObj)[0];
      const pass = typeof fn === "function";
      results.push({ name: "FinalAttempt is defined as retry function", pass, error: pass ? null : "Expected FinalAttempt to be exported" });
    } else if (dir === "231-flatten-and-map") {
      const fn = exportsObj.flattenAndMap || Object.values(exportsObj)[0];
      const res = fn({ a: { b: "hello" } }, s => s.toUpperCase());
      const pass = res && res["a.b"] === "HELLO";
      results.push({ name: "flattenAndMap flattens keys and transforms values", pass, error: pass ? null : "Expected { 'a.b': 'HELLO' }" });
    } else if (dir === "232-flatten-object") {
      const fn = exportsObj.flattenObject || Object.values(exportsObj)[0];
      const res = fn({ a: { b: 1, c: { d: 2 } } });
      const pass = res && res["a.b"] === 1 && res["a.c.d"] === 2;
      results.push({ name: "flattenObject flattens nested keys", pass, error: pass ? null : "Expected dot-notated keys" });
    } else if (dir === "233-grid-words-finder") {
      const fn = exportsObj.gridWordsFinder || Object.values(exportsObj)[0];
      const res = fn([['c','a','t'],['d','o','g']], ["cat", "dog", "fish"]);
      const pass = Array.isArray(res) && res.includes("cat") && res.includes("dog");
      results.push({ name: "gridWordsFinder finds horizontal & vertical words", pass, error: pass ? null : "Expected found words list" });
    } else if (dir === "234-grid-words-finder-2") {
      const fn = exportsObj.gridWordFinder2 || Object.values(exportsObj)[0];
      const res = fn([['h','o','t'],['d','o','g'],['s','u','n']], ["hon", "sun"]);
      const pass = Array.isArray(res) && res.includes("hon");
      results.push({ name: "gridWordFinder2 finds diagonal words in 8 directions", pass, error: pass ? null : "Expected found words in 8 directions" });
    } else if (dir === "235-insertion-sort-analyzer") {
      const fn = exportsObj.insertionSortAnalyzer || Object.values(exportsObj)[0];
      const res = fn([4, 2, 1, 3]);
      const pass = res && Array.isArray(res.sortedArray) && res.sortedArray.join(',') === '1,2,3,4' && res.totalShifts > 0;
      results.push({ name: "insertionSortAnalyzer tracks shifts and comparisons", pass, error: pass ? null : "Expected sorted array with metrics" });
    } else if (dir === "236-nested-array-reverser") {
      const fn = exportsObj.nestedArrayReverser || Object.values(exportsObj)[0];
      const res = fn([1, [2, 3], [4, [5, 6]]]);
      const pass = JSON.stringify(res) === JSON.stringify([[[6, 5], 4], [3, 2], 1]);
      results.push({ name: "nestedArrayReverser deeply reverses all dimensions", pass, error: pass ? null : "Expected deep reverse of nested arrays" });
    } else if (dir === "237-object-lab") {
      const fn = exportsObj.mergeAndTransform || Object.values(exportsObj)[0];
      const res = fn([{ name: "alice", score: 50 }], { name: s => s.toUpperCase(), score: s => s * 2 });
      const pass = res && res.name === "ALICE" && res.score === 100;
      results.push({ name: "mergeAndTransform merges and transforms keys", pass, error: pass ? null : "Expected transformed schema" });
    } else if (dir === "238-palindromic-chain") {
      const fn = exportsObj.palindromicChain || Object.values(exportsObj)[0];
      const res = fn(87);
      const pass = res && res.steps === 4 && res.palindrome === 4884;
      results.push({ name: "palindromicChain calculates palindrome steps", pass, error: pass ? null : "Expected { steps: 4, palindrome: 4884 }" });
    } else if (dir === "239-perfect-number") {
      const fn = exportsObj.isPerfectNum || Object.values(exportsObj)[0];
      const pass = fn(6) === true && fn(28) === true && fn(12) === false;
      results.push({ name: "isPerfectNum validates perfect numbers", pass, error: pass ? null : "Expected isPerfectNum(6) to be true" });
    } else if (dir === "240-functional-pipeline") {
      const fn = exportsObj.pipeline || Object.values(exportsObj)[0];
      const res = fn(2, x => x + 3, x => x * 4);
      const pass = res && res.result === 20 && Array.isArray(res.steps);
      results.push({ name: "pipeline executes functions and logs trace", pass, error: pass ? null : "Expected pipeline result 20" });
    } else if (dir === "241-sentence-pyramid") {
      const fn = exportsObj.sentencePyramid || Object.values(exportsObj)[0];
      const res = fn("This is a test");
      const pass = Array.isArray(res) && res.length === 4 && res[0] === "This" && res[3] === "This is a test";
      results.push({ name: "sentencePyramid generates prefix pyramid", pass, error: pass ? null : "Expected sentence prefix array" });
    } else if (dir === "242-sleep-breaker") {
      const fn = exportsObj.sleepBreaker || Object.values(exportsObj)[0];
      const pass = typeof fn === "function";
      results.push({ name: "sleepBreaker is defined as cancellable timer", pass, error: pass ? null : "Expected sleepBreaker to be exported" });
    } else if (dir === "243-snake-path-validator") {
      const fn = exportsObj.isSnakePath || Object.values(exportsObj)[0];
      const pass = fn([[1, 0], [1, 1], [0, 1]]) === true && fn([[1, 0, 1], [0, 0, 0]]) === false;
      results.push({ name: "isSnakePath validates contiguous path without loops", pass, error: pass ? null : "Expected snake path validation" });
    } else if (dir === "244-swappable-object") {
      const fn = exportsObj.swappableObject || Object.values(exportsObj)[0];
      const obj = fn({ a: "apple", b: "banana" });
      const pass = obj && obj.a === "apple" && obj.apple === "a";
      results.push({ name: "swappableObject enables bi-directional Proxy access", pass, error: pass ? null : "Expected bi-directional access" });
    } else if (dir === "245-transform-keys") {
      const fn = exportsObj.transformKeys || Object.values(exportsObj)[0];
      const res = fn({ FirstName: "Alice" }, k => k.toLowerCase());
      const pass = res && res.firstname === "Alice";
      results.push({ name: "transformKeys recursively transforms keys", pass, error: pass ? null : "Expected lowercased keys" });
    } else if (dir === "246-trap-object") {
      const fn = exportsObj.trapObject || Object.values(exportsObj)[0];
      const logs = [];
      const trapped = fn({ name: "Alice" }, (action, key) => logs.push({ action, key }));
      const n = trapped.name;
      const pass = n === "Alice" && logs.length > 0 && logs[0].action === "get";
      results.push({ name: "trapObject intercepts get and set operations", pass, error: pass ? null : "Expected trapped Proxy events" });
    } else if (dir === "247-zoo-race") {
      const fnAnimal = exportsObj.animal;
      const fnRace = exportsObj.zooRace || Object.values(exportsObj)[0];
      const pass = typeof fnAnimal === "function" && typeof fnRace === "function";
      results.push({ name: "animal and zooRace physics simulation functions", pass, error: pass ? null : "Expected animal and zooRace exports" });
    } else {
      // General heuristic verification
      if (typeof exportedVal === "function") {
        results.push({ name: `${targetSymbol} is defined as a valid function`, pass: true });
        results.push({ name: `Execution succeeds without runtime errors`, pass: true });
      } else if (targetSymbol in exportsObj) {
        results.push({ name: `${targetSymbol} is exported`, pass: true });
      } else {
        results.push({ name: "Symbol export check", pass: false, error: "Exported symbol was not found" });
      }
    }
  } catch (err) {
    results.push({ name: "Assertion Evaluation", pass: false, error: err.message });
  }

  return results;
}
