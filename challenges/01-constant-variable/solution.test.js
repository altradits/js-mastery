import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { message } from "./solution.js";

describe("01 - Constant Variable", () => {
  test("message is exported with value 'Hello World'", () => {
    assert.strictEqual(typeof message, "string");
    assert.strictEqual(message, "Hello World");
  });
});
