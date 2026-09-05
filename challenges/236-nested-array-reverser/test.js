import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { nestedArrayReverser } from "./solution.js";

describe("236 - Nested Array Reverser", () => {
  test("reverses all nested levels", () => {
    assert.deepStrictEqual(nestedArrayReverser([1, [2, 3], [4, [5, 6]]]), [[[6, 5], 4], [3, 2], 1]);
  });
});
