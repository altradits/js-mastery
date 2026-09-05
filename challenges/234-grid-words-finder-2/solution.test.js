import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { gridWordFinder2 } from "./solution.js";

describe("234 - Grid Word Finder 2", () => {
  test("finds diagonal words", () => {
    const grid = [
      ['h', 'o', 't'],
      ['d', 'o', 'g'],
      ['s', 'u', 'n']
    ];
    assert.deepStrictEqual(gridWordFinder2(grid, ["hon", "hot", "sun", "nonexistent"]), ["hon", "hot", "sun"]);
  });
});
