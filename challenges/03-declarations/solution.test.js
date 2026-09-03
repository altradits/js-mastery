import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { escapeStr, arr, obj, nested } from "./solution.js";

describe("03 - Declarations: Object & Array Freezing and Escaping", () => {
  test("escapeStr contains exact sequence of escaped characters", () => {
    assert.strictEqual(escapeStr, "`\\/\"'");
    assert.strictEqual(escapeStr.length, 5);
  });

  test("arr is frozen and contains [4, '2']", () => {
    assert.ok(Object.isFrozen(arr), "arr must be frozen with Object.freeze()");
    assert.deepStrictEqual(arr, [4, "2"]);
    assert.throws(() => {
      arr[0] = 99;
    }, TypeError);
  });

  test("obj is frozen and contains str, num, bool, undef", () => {
    assert.ok(Object.isFrozen(obj), "obj must be frozen with Object.freeze()");
    assert.strictEqual(obj.str, "hello");
    assert.strictEqual(obj.num, 42);
    assert.strictEqual(obj.bool, true);
    assert.strictEqual(obj.undef, undefined);
    assert.throws(() => {
      obj.str = "changed";
    }, TypeError);
  });

  test("nested is deeply frozen including inner arr and obj", () => {
    assert.ok(Object.isFrozen(nested), "nested root object must be frozen");
    assert.ok(Object.isFrozen(nested.arr), "nested.arr must be frozen");
    assert.ok(Object.isFrozen(nested.obj), "nested.obj must be frozen");
    assert.deepStrictEqual(nested.arr, [4, undefined, "2"]);
    assert.deepStrictEqual(nested.obj, { str: "world", num: 100, bool: false });
  });
});
