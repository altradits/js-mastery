import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { slice } from "./solution.js";

describe("208 - Slicer Manual", () => {
  test("slice extracts sub-elements correctly", () => {
    assert.strictEqual(slice("abcdef", 1, 4), "bcd");
    assert.deepStrictEqual(slice([1, 2, 3, 4], 1, 3), [2, 3]);
    assert.strictEqual(slice("hello", -2), "lo");
  });
});
