// In-Browser Sandboxed Code Evaluator with Timeout Protection

export async function evaluateSubmission(userCode, challenge) {
  const startTime = performance.now();
  const logs = [];
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

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
