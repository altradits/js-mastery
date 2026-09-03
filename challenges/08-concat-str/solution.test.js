import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { concatStr } from "./solution.js";

describe("08 - Concat Str: Explicit Type Coercion", () => {
  test("concatenates two numbers as string", () => {
    assert.strictEqual(concatStr(1, 2), "12");
    assert.strictEqual(typeof concatStr(1, 2), "string");
  });

  test("concatenates strings", () => {
    assert.strictEqual(concatStr("Hello", "World"), "HelloWorld");
    assert.strictEqual(concatStr("a", "b"), "ab");
  });

  test("handles boolean and null/undefined values safely", () => {
    assert.strictEqual(concatStr(true, false), "truefalse");
    assert.strictEqual(concatStr(null, undefined), "nullundefined");
    assert.strictEqual(concatStr("age: ", 25), "age: 25");
  });
});
