import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { makeArray } from "./solution.js";

describe("139 - Array of", () => {
  test("makeArray constructs array accurately", () => {
    assert.deepStrictEqual(makeArray(7), [7]);
    assert.deepStrictEqual(makeArray(1, 2, 3), [1, 2, 3]);
  });
});
