import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { hasAnyNegative } from "./solution.js";

describe("133 - Array Some", () => {
  test("hasAnyNegative checks for presence", () => {
    assert.strictEqual(hasAnyNegative([1, -2, 3]), true);
  });
});
