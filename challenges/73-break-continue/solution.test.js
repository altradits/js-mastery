import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sumUntilNegative } from "./solution.js";

describe("73 - Break & Continue", () => {
  test("sumUntilNegative breaks on negative", () => {
    assert.strictEqual(sumUntilNegative([10, 20, -5, 30]), 30);
    assert.strictEqual(sumUntilNegative([1, 2, 3]), 6);
  });
});
