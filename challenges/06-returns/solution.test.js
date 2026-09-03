import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { id, getLength } from "./solution.js";

describe("06 - Returns: Identity & Length Extraction", () => {
  describe("id(arg)", () => {
    test("returns primitive values unmodified", () => {
      assert.strictEqual(id(42), 42);
      assert.strictEqual(id("hello"), "hello");
      assert.strictEqual(id(true), true);
      assert.strictEqual(id(null), null);
    });

    test("returns reference types unmodified", () => {
      const arr = [1, 2, 3];
      assert.strictEqual(id(arr), arr);
      const obj = { a: 1 };
      assert.strictEqual(id(obj), obj);
    });
  });

  describe("getLength(arg)", () => {
    test("returns length of strings", () => {
      assert.strictEqual(getLength("hello"), 5);
      assert.strictEqual(getLength(""), 0);
      assert.strictEqual(getLength("JavaScript"), 10);
    });

    test("returns length of arrays", () => {
      assert.strictEqual(getLength([1, 2, 3, 4]), 4);
      assert.strictEqual(getLength([]), 0);
      assert.strictEqual(getLength(["a", "b"]), 2);
    });
  });
});
