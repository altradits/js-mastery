import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { max, min } from "./solution.js";

describe("14 - Min Max: Comparison Logic", () => {
  describe("max(a, b)", () => {
    test("returns maximum of positive numbers", () => {
      assert.strictEqual(max(5, 10), 10);
      assert.strictEqual(max(20, 3), 20);
    });

    test("handles negative numbers and zero", () => {
      assert.strictEqual(max(-5, -10), -5);
      assert.strictEqual(max(-10, 0), 0);
      assert.strictEqual(max(0, 0), 0);
    });
  });

  describe("min(a, b)", () => {
    test("returns minimum of positive numbers", () => {
      assert.strictEqual(min(5, 10), 5);
      assert.strictEqual(min(20, 3), 3);
    });

    test("handles negative numbers and zero", () => {
      assert.strictEqual(min(-5, -10), -10);
      assert.strictEqual(min(-10, 0), -10);
      assert.strictEqual(min(7, 7), 7);
    });
  });
});
