import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sign, sameSign } from "./solution.js";

describe("15 - Sign: Sign Detection & Sign Parity", () => {
  describe("sign(n)", () => {
    test("returns 1 for positive numbers", () => {
      assert.strictEqual(sign(5), 1);
      assert.strictEqual(sign(0.01), 1);
      assert.strictEqual(sign(1000), 1);
    });

    test("returns -1 for negative numbers", () => {
      assert.strictEqual(sign(-5), -1);
      assert.strictEqual(sign(-0.01), -1);
      assert.strictEqual(sign(-1000), -1);
    });

    test("returns 0 for zero", () => {
      assert.strictEqual(sign(0), 0);
    });
  });

  describe("sameSign(a, b)", () => {
    test("returns true for numbers with identical signs", () => {
      assert.strictEqual(sameSign(5, 10), true);
      assert.strictEqual(sameSign(-5, -20), true);
      assert.strictEqual(sameSign(0, 0), true);
    });

    test("returns false for numbers with different signs", () => {
      assert.strictEqual(sameSign(5, -5), false);
      assert.strictEqual(sameSign(-10, 10), false);
      assert.strictEqual(sameSign(0, 5), false);
      assert.strictEqual(sameSign(-5, 0), false);
    });
  });
});
