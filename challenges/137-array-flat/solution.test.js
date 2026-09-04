import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { flattenArray } from "./solution.js";

describe("137 - Array Flat", () => {
  test("flattenArray flattens nested arrays", () => {
    assert.deepStrictEqual(flattenArray([1, [2, 3], [[4]]], 2), [1, 2, 3, 4]);
  });
});
