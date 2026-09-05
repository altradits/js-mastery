import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { reverseChunks } from "./solution.js";

describe("217 - Array Reverse Chunks", () => {
  test("reverses array in chunks", () => {
    assert.deepStrictEqual(reverseChunks([1, 2, 3, 4, 5, 6, 7, 8], 3), [3, 2, 1, 6, 5, 4, 8, 7]);
    assert.deepStrictEqual(reverseChunks([1, 2, 3, 4, 5], 2), [2, 1, 4, 3, 5]);
    assert.deepStrictEqual(reverseChunks([], 2), []);
  });
});
