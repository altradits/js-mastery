import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { prependItem } from "./solution.js";

describe("122 - Array Unshift", () => {
  test("prependItem adds to beginning", () => {
    const list = [2, 3];
    assert.deepStrictEqual(prependItem(list, 1), [1, 2, 3]);
  });
});
