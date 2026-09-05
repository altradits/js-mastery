import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isSnakePath } from "./solution.js";

describe("243 - Snake Path Validator", () => {
  test("validates snake paths", () => {
    const grid1 = [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 1]
    ];
    const grid2 = [
      [1, 0, 1],
      [0, 0, 0],
      [0, 0, 0]
    ];
    assert.strictEqual(isSnakePath(grid1), true);
    assert.strictEqual(isSnakePath(grid2), false);
  });
});
