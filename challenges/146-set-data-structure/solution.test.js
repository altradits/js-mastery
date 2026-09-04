import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getUnique } from "./solution.js";

describe("146 - Set Unique", () => {
  test("getUnique filters duplicates", () => {
    assert.deepStrictEqual(getUnique([1, 2, 2, 3, 1]), [1, 2, 3]);
  });
});
