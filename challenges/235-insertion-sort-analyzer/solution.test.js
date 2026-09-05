import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { insertionSortAnalyzer } from "./solution.js";

describe("235 - Insertion Sort Analyzer", () => {
  test("sorts and provides analytics", () => {
    const res = insertionSortAnalyzer([4, 3, 2, 10, 12, 1, 5, 6]);
    assert.deepStrictEqual(res.sortedArray, [1, 2, 3, 4, 5, 6, 10, 12]);
    assert.ok(res.totalShifts > 0);
    assert.ok(res.totalComparisons > 0);
    assert.strictEqual(res.iterations, 7);
  });
});
