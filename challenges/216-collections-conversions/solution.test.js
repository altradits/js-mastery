import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { arrToStr, setToArr, strToArr, strToSet } from "./solution.js";

describe("216 - Collections Conversions", () => {
  test("converts between collections properly", () => {
    assert.strictEqual(arrToStr(["a", "b"]), "ab");
    assert.deepStrictEqual(setToArr(new Set([1, 2])), [1, 2]);
    assert.deepStrictEqual(strToArr("hi"), ["h", "i"]);
    assert.strictEqual(strToSet("aa").size, 1);
  });
});
