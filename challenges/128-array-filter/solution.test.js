import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getEvens } from "./solution.js";

describe("128 - Array Filter", () => {
  test("getEvens filters out odd numbers", () => {
    assert.deepStrictEqual(getEvens([1, 2, 3, 4, 5]), [2, 4]);
  });
});
