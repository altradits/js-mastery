import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sumArray } from "./solution.js";

describe("70 - For..Of Array", () => {
  test("sumArray sums all numbers in array", () => {
    assert.strictEqual(sumArray([1, 2, 3]), 6);
    assert.strictEqual(sumArray([]), 0);
  });
});
