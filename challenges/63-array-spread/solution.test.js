import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { merge } from "./solution.js";

describe("63 - Array Spread", () => {
  test("merge combines arrays using spread", () => {
    assert.deepStrictEqual(merge([1, 2], [3, 4]), [1, 2, 3, 4]);
  });
});
