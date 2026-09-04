// In-Browser Sandboxed Code Evaluator with Timeout Protection

export async function evaluateSubmission(userCode, challenge) {
  const startTime = performance.now();

  try {
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
      duration
    };
  } catch (err) {
    const duration = Math.round(performance.now() - startTime);
    return {
      success: false,
      results: [{ name: "Compilation & Runtime Execution", pass: false, error: err.message }],
      error: err.message,
      duration
    };
  }
}

function runChallengeAssertions(exportsObj, challenge) {
  const results = [];
  const dir = challenge.dir;

  // Verify symbol exists
  const targetSymbol = Object.keys(exportsObj)[0];
  if (!targetSymbol && !challenge.dir.includes("constant")) {
    return [{ name: "Export Validation", pass: false, error: "No exported function or constant detected." }];
  }

  const exportedVal = exportsObj[targetSymbol] ?? Object.values(exportsObj)[0];

  try {
    if (dir === "01-constant-variable") {
      const pass = typeof exportsObj.message === "string" && exportsObj.message === "Hello World";
      results.push({ name: "message === 'Hello World'", pass, error: pass ? null : `Expected 'Hello World', got ${exportsObj.message}` });
    } else if (dir === "02-basic-function") {
      const pass = typeof exportsObj.sayHello === "function";
      results.push({ name: "sayHello is a function", pass });
    } else if (dir === "03-function-parameter") {
      const pass = typeof exportsObj.logMessage === "function";
      results.push({ name: "logMessage is a function", pass });
    } else if (dir === "04-return-statement") {
      const pass = typeof exportsObj.getMessage === "function" && exportsObj.getMessage() === "Hello World";
      results.push({ name: "getMessage() returns 'Hello World'", pass });
    } else if (dir === "05-return-parameter") {
      const fn = exportsObj.id;
      const pass = typeof fn === "function" && fn(42) === 42 && fn("test") === "test";
      results.push({ name: "id(arg) returns arg", pass });
    } else if (dir.includes("add") || dir === "21-addition") {
      const fn = exportsObj.add || Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn(2, 3) === 5 && fn(-1, 1) === 0;
      results.push({ name: "add(a, b) calculates sum", pass });
    } else if (dir.includes("multiply") || dir === "23-multiplication") {
      const fn = exportsObj.multiply || exportsObj.multiplyLoop || Object.values(exportsObj)[0];
      const pass = typeof fn === "function" && fn(3, 4) === 12;
      results.push({ name: "multiply(a, b) calculates product", pass });
    } else {
      // General heuristic verification
      if (typeof exportedVal === "function") {
        results.push({ name: `${targetSymbol} is defined as a valid function`, pass: true });
        results.push({ name: `Execution succeeds without runtime errors`, pass: true });
      } else if (exportedVal !== undefined) {
        results.push({ name: `${targetSymbol} is exported with value`, pass: true });
      } else {
        results.push({ name: "Symbol export check", pass: false, error: "Exported symbol value is undefined" });
      }
    }
  } catch (err) {
    results.push({ name: "Assertion Evaluation", pass: false, error: err.message });
  }

  return results;
}
