import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { findExtremes } from "./solution.js";

describe("113 - Math Max & Min", () => {
  test("findExtremes computes max and min", () => {
    assert.deepStrictEqual(findExtremes(10, 5, 20, -3), { max: 20, min: -3 });
  });
});
