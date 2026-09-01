import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { deepFlatten } from "./solution.js";

describe("07 - deepFlatten", () => {
  test("flattens deeply nested multi-dimensional arrays", () => {
    assert.deepStrictEqual(
      deepFlatten([1, [2, [3, [4, 5]]], 6]),
      [1, 2, 3, 4, 5, 6]
    );
  });

  test("leaves already flat arrays unchanged", () => {
    assert.deepStrictEqual(deepFlatten([1, 2, 3]), [1, 2, 3]);
  });

  test("handles empty arrays and empty nested structures", () => {
    assert.deepStrictEqual(deepFlatten([[], [[]], []]), []);
  });
});