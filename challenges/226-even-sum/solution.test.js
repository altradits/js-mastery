import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { evenSum } from "./solution.js";

describe("226 - Even Sum", () => {
  test("sums all even numbers", () => {
    assert.strictEqual(evenSum([1, 2, 3, 4, 5, 6]), 12);
    assert.strictEqual(evenSum([1, 3, 5]), 0);
    assert.strictEqual(evenSum([-2, -4, 5]), -6);
  });
});
