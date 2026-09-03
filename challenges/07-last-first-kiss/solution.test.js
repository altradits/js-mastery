import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { first, last, kiss } from "./solution.js";

describe("07 - Last First Kiss: Zero-Based Indexing", () => {
  describe("first(arg)", () => {
    test("returns first item of array", () => {
      assert.strictEqual(first([10, 20, 30]), 10);
      assert.strictEqual(first(["a", "b"]), "a");
    });

    test("returns first character of string", () => {
      assert.strictEqual(first("hello"), "h");
      assert.strictEqual(first("JavaScript"), "J");
    });
  });

  describe("last(arg)", () => {
    test("returns last item of array", () => {
      assert.strictEqual(last([10, 20, 30]), 30);
      assert.strictEqual(last(["a", "b"]), "b");
    });

    test("returns last character of string", () => {
      assert.strictEqual(last("hello"), "o");
      assert.strictEqual(last("JavaScript"), "t");
    });
  });

  describe("kiss(arg)", () => {
    test("returns [last, first] for arrays", () => {
      assert.deepStrictEqual(kiss([1, 2, 3, 4]), [4, 1]);
      assert.deepStrictEqual(kiss(["start", "middle", "end"]), ["end", "start"]);
      assert.deepStrictEqual(kiss([42]), [42, 42]);
    });

    test("returns [last, first] for strings", () => {
      assert.deepStrictEqual(kiss("hello"), ["o", "h"]);
      assert.deepStrictEqual(kiss("code"), ["e", "c"]);
      assert.deepStrictEqual(kiss("Z"), ["Z", "Z"]);
    });
  });
});
