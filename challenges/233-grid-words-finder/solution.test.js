import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { gridWordsFinder } from "./solution.js";

describe("233 - Grid Words Finder", () => {
  test("finds horizontal and vertical words in grid", () => {
    const grid = [
      ['c', 'a', 't', 's'],
      ['d', 'o', 'g', 'x'],
      ['b', 'i', 'r', 'd']
    ];
    assert.deepStrictEqual(gridWordsFinder(grid, ["cat", "dog", "bird", "fish"]), ["cat", "dog", "bird"]);
  });
});
