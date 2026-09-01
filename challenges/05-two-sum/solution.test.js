import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { twoSum } from "./solution.js";

describe("05 - twoSum", () => {
  test("finds indices of two numbers that add to target", () => {
    assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });

  test("handles unsorted array with negative values", () => {
    assert.deepStrictEqual(twoSum([3, 2, -4, 8], 4), [2, 3]);
  });

  test("handles duplicate values forming target", () => {
    assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1]);
  });

  test("returns empty array when no valid pair exists", () => {
    assert.deepStrictEqual(twoSum([1, 2, 3], 10), []);
  });
});