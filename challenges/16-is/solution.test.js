import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { is } from "./solution.js";

describe("16 - Is: Custom Type Checking Library", () => {
  test("is.num detects numbers and NaN/Infinity", () => {
    assert.strictEqual(is.num(42), true);
    assert.strictEqual(is.num(3.14), true);
    assert.strictEqual(is.num(NaN), true);
    assert.strictEqual(is.num(Infinity), true);
    assert.strictEqual(is.num("42"), false);
  });

  test("is.nan detects NaN specifically", () => {
    assert.strictEqual(is.nan(NaN), true);
    assert.strictEqual(is.nan(42), false);
    assert.strictEqual(is.nan("hello"), false);
  });

  test("is.str detects string primitives", () => {
    assert.strictEqual(is.str("hello"), true);
    assert.strictEqual(is.str(""), true);
    assert.strictEqual(is.str(123), false);
  });

  test("is.bool detects boolean primitives", () => {
    assert.strictEqual(is.bool(true), true);
    assert.strictEqual(is.bool(false), true);
    assert.strictEqual(is.bool(0), false);
  });

  test("is.undef and is.def detect undefined state", () => {
    assert.strictEqual(is.undef(undefined), true);
    assert.strictEqual(is.undef(null), false);
    assert.strictEqual(is.def(0), true);
    assert.strictEqual(is.def(undefined), false);
  });

  test("is.arr detects arrays", () => {
    assert.strictEqual(is.arr([1, 2]), true);
    assert.strictEqual(is.arr([]), true);
    assert.strictEqual(is.arr({ length: 0 }), false);
  });

  test("is.obj detects objects (excluding arrays)", () => {
    assert.strictEqual(is.obj({ a: 1 }), true);
    assert.strictEqual(is.obj({}), true);
    assert.strictEqual(is.obj([1, 2]), false);
    assert.strictEqual(is.obj("string"), false);
  });

  test("is.fun detects functions", () => {
    assert.strictEqual(is.fun(() => {}), true);
    assert.strictEqual(is.fun(function() {}), true);
    assert.strictEqual(is.fun({}), false);
  });

  test("is.truthy and is.falsy evaluate truthiness", () => {
    assert.strictEqual(is.truthy(1), true);
    assert.strictEqual(is.truthy("a"), true);
    assert.strictEqual(is.truthy([]), true);
    assert.strictEqual(is.truthy(0), false);
    assert.strictEqual(is.truthy(false), false);

    assert.strictEqual(is.falsy(0), true);
    assert.strictEqual(is.falsy(""), true);
    assert.strictEqual(is.falsy(null), true);
    assert.strictEqual(is.falsy(1), false);
  });
});
