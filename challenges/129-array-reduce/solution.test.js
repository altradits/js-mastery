import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sum } from "./solution.js";

describe("129 - Array Reduce", () => {
  test("sum computes total with reduce", () => {
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
  });
});
