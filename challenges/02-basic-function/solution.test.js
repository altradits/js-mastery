import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sayHello } from "./solution.js";

describe("02 - Basic Function", () => {
  test("sayHello prints 'Hello'", () => {
    assert.strictEqual(typeof sayHello, "function");
    let captured = null;
    const originalLog = console.log;
    try {
      console.log = (arg) => { captured = arg; };
      sayHello();
      assert.strictEqual(captured, "Hello");
    } finally {
      console.log = originalLog;
    }
  });
});
