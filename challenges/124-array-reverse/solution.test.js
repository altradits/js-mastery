import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { reverseCopy } from "./solution.js";

describe("124 - Array Reverse", () => {
  test("reverseCopy reverses without mutating original", () => {
    const orig = [1, 2, 3];
    assert.deepStrictEqual(reverseCopy(orig), [3, 2, 1]);
    assert.deepStrictEqual(orig, [1, 2, 3]);
  });
});
