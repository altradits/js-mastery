import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { removeFirst } from "./solution.js";

describe("121 - Array Shift", () => {
  test("removeFirst removes first element", () => {
    const list = [1, 2, 3];
    assert.strictEqual(removeFirst(list), 1);
    assert.deepStrictEqual(list, [2, 3]);
  });
});
