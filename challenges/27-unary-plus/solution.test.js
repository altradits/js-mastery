import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { toNum } from "./solution.js";

describe("27 - Unary Plus", () => {
  test("toNum converts operand to number", () => {
    assert.strictEqual(toNum("42"), 42);
    assert.strictEqual(toNum("3.14"), 3.14);
  });
});
