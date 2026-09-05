import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { deepClone } from "./solution.js";

describe("220 - Advanced Deep Clone", () => {
  test("clones nested objects and arrays cleanly", () => {
    const orig = { a: [1, { b: 2 }], d: new Date("2025-01-01") };
    const copy = deepClone(orig);
    assert.deepStrictEqual(copy, orig);
    assert.notStrictEqual(copy, orig);
    assert.notStrictEqual(copy.a, orig.a);
    assert.notStrictEqual(copy.a[1], orig.a[1]);
  });
});
