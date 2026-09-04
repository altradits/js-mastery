import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isLessOrEqual } from "./solution.js";

describe("39 - Less Or Equal", () => {
  test("isLessOrEqual compares values", () => {
    assert.strictEqual(isLessOrEqual(4, 5), true);
  });
});
