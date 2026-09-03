import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { message, logHello } from "./solution.js";

describe("01 - How to JS: Script Execution & Console Output", () => {
  test("message constant is exported with value 'Hello World'", () => {
    assert.strictEqual(typeof message, "string");
    assert.strictEqual(message, "Hello World");
  });

  test("logHello is a function", () => {
    assert.strictEqual(typeof logHello, "function");
  });

  test("logHello outputs 'Hello World' to console.log", () => {
    const originalLog = console.log;
    let captured = null;
    try {
      console.log = (arg) => {
        captured = arg;
      };
      logHello();
      assert.strictEqual(captured, "Hello World");
    } finally {
      console.log = originalLog;
    }
  });
});
