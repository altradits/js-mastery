import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { fillArray } from "./solution.js";

describe("125 - Array Fill", () => {
  test("fillArray fills array with value", () => {
    assert.deepStrictEqual(fillArray([1, 2, 3], 0), [0, 0, 0]);
  });
});
