import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isGreaterOrEqual } from "./solution.js";

describe("38 - Greater Or Equal", () => {
  test("isGreaterOrEqual compares values", () => {
    assert.strictEqual(isGreaterOrEqual(5, 5), true);
  });
});
