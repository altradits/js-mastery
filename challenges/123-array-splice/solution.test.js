import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { removeAndInsert } from "./solution.js";

describe("123 - Array Splice", () => {
  test("removeAndInsert modifies array in place", () => {
    const list = [1, 2, 3];
    assert.deepStrictEqual(removeAndInsert(list, 1, 1, 99), [1, 99, 3]);
  });
});
