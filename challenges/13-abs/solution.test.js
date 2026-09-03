import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isPositive, abs } from "./solution.js";

describe("13 - Abs: Absolute Value & Sign Evaluation", () => {
  describe("isPositive(num)", () => {
    test("returns true for strictly positive numbers", () => {
      assert.strictEqual(isPositive(5), true);
      assert.strictEqual(isPositive(0.1), true);
      assert.strictEqual(isPositive(100), true);
    });

    test("returns false for zero and negative numbers", () => {
      assert.strictEqual(isPositive(0), false);
      assert.strictEqual(isPositive(-0), false);
      assert.strictEqual(isPositive(-5), false);
      assert.strictEqual(isPositive(-100), false);
    });
  });

  describe("abs(num)", () => {
    test("returns absolute value for negative numbers", () => {
      assert.strictEqual(abs(-5), 5);
      assert.strictEqual(abs(-100.5), 100.5);
    });

    test("returns same number for positive numbers and zero", () => {
      assert.strictEqual(abs(5), 5);
      assert.strictEqual(abs(0), 0);
      assert.strictEqual(abs(-0), 0);
    });
  });
});
