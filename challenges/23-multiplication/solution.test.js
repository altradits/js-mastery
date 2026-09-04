import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { multiply } from "./solution.js";

describe("23 - Multiplication", () => {
  test("multiply(a, b) returns product", () => {
    assert.strictEqual(multiply(4, 5), 20);
    assert.strictEqual(multiply(-2, 3), -6);
  });
});
