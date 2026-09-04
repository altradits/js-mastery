import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { deepClone } from "./solution.js";

describe("187 - Deep Clone", () => {
  test("deepClone produces independent recursive copy", () => {
    const orig = { a: 1, nested: { b: 2 } };
    const cloned = deepClone(orig);
    assert.deepStrictEqual(cloned, orig);
    cloned.nested.b = 99;
    assert.strictEqual(orig.nested.b, 2);
  });
});
