import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { chunkArray } from "./solution.js";

describe("04 - chunkArray", () => {
  test("chunks array evenly divisible by size", () => {
    assert.deepStrictEqual(
      chunkArray([1, 2, 3, 4], 2),
      [[1, 2], [3, 4]]
    );
  });

  test("chunks array with remaining trailing elements", () => {
    assert.deepStrictEqual(
      chunkArray([1, 2, 3, 4, 5], 2),
      [[1, 2], [3, 4], [5]]
    );
  });

  test("returns single chunk if size exceeds array length", () => {
    assert.deepStrictEqual(
      chunkArray([1, 2, 3], 5),
      [[1, 2, 3]]
    );
  });

  test("handles empty array or invalid size <= 0", () => {
    assert.deepStrictEqual(chunkArray([], 2), []);
    assert.deepStrictEqual(chunkArray([1, 2, 3], 0), []);
  });
});