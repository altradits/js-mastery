import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { bubbleSortAnalyzer } from "./solution.js";

describe("218 - Bubble Sort Analyzer", () => {
  test("analyzes bubble sort metrics correctly", () => {
    const res = bubbleSortAnalyzer([4, 2, 1, 3]);
    assert.deepStrictEqual(res.sortedArray, [1, 2, 3, 4]);
    assert.ok(res.totalSwaps > 0);
    assert.ok(res.totalComparisons > 0);
    assert.ok(res.passes > 0);
  });
});
