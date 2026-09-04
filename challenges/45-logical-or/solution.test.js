import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { either } from "./solution.js";

describe("45 - Logical OR", () => {
  test("either evaluates ||", () => {
    assert.strictEqual(either("hello", "fallback"), "hello");
    assert.strictEqual(either("", "fallback"), "fallback");
  });
});
