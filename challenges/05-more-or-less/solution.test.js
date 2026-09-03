import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { more, less, add, sub } from "./solution.js";

describe("05 - More or Less: Basic Arithmetic Functions", () => {
  describe("more(n)", () => {
    test("increments positive numbers", () => {
      assert.strictEqual(more(5), 6);
      assert.strictEqual(more(0), 1);
    });

    test("increments negative numbers", () => {
      assert.strictEqual(more(-10), -9);
      assert.strictEqual(more(-1), 0);
    });
  });

  describe("less(n)", () => {
    test("decrements positive numbers", () => {
      assert.strictEqual(less(5), 4);
      assert.strictEqual(less(1), 0);
    });

    test("decrements zero and negative numbers", () => {
      assert.strictEqual(less(0), -1);
      assert.strictEqual(less(-5), -6);
    });
  });

  describe("add(a, b)", () => {
    test("adds two numbers correctly", () => {
      assert.strictEqual(add(10, 20), 30);
      assert.strictEqual(add(-5, 5), 0);
      assert.strictEqual(add(0, 0), 0);
      assert.strictEqual(add(1.5, 2.5), 4);
    });
  });

  describe("sub(a, b)", () => {
    test("subtracts two numbers correctly", () => {
      assert.strictEqual(sub(20, 10), 10);
      assert.strictEqual(sub(5, 10), -5);
      assert.strictEqual(sub(0, 7), -7);
    });
  });
});
