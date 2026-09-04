import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { logMessage } from "./solution.js";

describe("03 - Function Parameter", () => {
  test("logMessage prints parameter", () => {
    assert.strictEqual(typeof logMessage, "function");
    let captured = null;
    const originalLog = console.log;
    try {
      console.log = (arg) => { captured = arg; };
      logMessage("Welcome!");
      assert.strictEqual(captured, "Welcome!");
    } finally {
      console.log = originalLog;
    }
  });
});
