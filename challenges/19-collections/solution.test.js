import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  arrToSet,
  arrToStr,
  setToArr,
  setToStr,
  strToArr,
  strToSet,
  mapToObj,
  objToArr,
  objToMap,
  arrToObj,
  strToObj,
  superTypeOf,
} from "./solution.js";

describe("19 - Collections: Collection Conversions & superTypeOf", () => {
  test("Array <-> Set conversions", () => {
    const arr = [1, 2, 3, 2];
    const set = arrToSet(arr);
    assert.ok(set instanceof Set);
    assert.strictEqual(set.size, 3);
    assert.deepStrictEqual(setToArr(set), [1, 2, 3]);
  });

  test("Array <-> String conversions", () => {
    assert.strictEqual(arrToStr(["a", "b", "c"]), "abc");
    assert.deepStrictEqual(strToArr("abc"), ["a", "b", "c"]);
  });

  test("Set <-> String conversions", () => {
    const set = new Set(["h", "e", "l", "l", "o"]);
    assert.strictEqual(setToStr(set), "helo");
    const newSet = strToSet("hello");
    assert.ok(newSet instanceof Set);
    assert.strictEqual(newSet.size, 4);
  });

  test("Map <-> Object conversions", () => {
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    const obj = mapToObj(map);
    assert.deepStrictEqual(obj, { a: 1, b: 2 });
    const backToMap = objToMap(obj);
    assert.ok(backToMap instanceof Map);
    assert.strictEqual(backToMap.get("a"), 1);
  });

  test("Object to Array and Array/String to Object", () => {
    assert.deepStrictEqual(objToArr({ a: 1, b: 2 }), [1, 2]);
    assert.deepStrictEqual(arrToObj(["x", "y"]), { "0": "x", "1": "y" });
    assert.deepStrictEqual(strToObj("ab"), { "0": "a", "1": "b" });
  });

  test("superTypeOf correctly detects fine-grained runtime types", () => {
    assert.strictEqual(superTypeOf(null), "null");
    assert.strictEqual(superTypeOf(undefined), "undefined");
    assert.strictEqual(superTypeOf([]), "Array");
    assert.strictEqual(superTypeOf({}), "Object");
    assert.strictEqual(superTypeOf(new Set()), "Set");
    assert.strictEqual(superTypeOf(new Map()), "Map");
    assert.strictEqual(superTypeOf("hello"), "String");
    assert.strictEqual(superTypeOf(42), "Number");
    assert.strictEqual(superTypeOf(true), "Boolean");
    assert.strictEqual(superTypeOf(() => {}), "Function");
  });
});
