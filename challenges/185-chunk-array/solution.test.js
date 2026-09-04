import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { chunk } from "./solution.js";

describe("185 - Array Chunking", () => {
  test("chunk splits arrays correctly", () => {
    assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
    assert.deepStrictEqual(chunk([1, 2, 3], 1), [[1], [2], [3]]);
    assert.deepStrictEqual(chunk([], 3), []);
  });
});
