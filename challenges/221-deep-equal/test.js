import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { deepEqual } from "./solution.js";

describe("221 - Deep Equal", () => {
  test("compares deep equality", () => {
    assert.strictEqual(deepEqual({ a: 1, b: { c: [2, 3] } }, { a: 1, b: { c: [2, 3] } }), true);
    assert.strictEqual(deepEqual({ a: 1 }, { a: 2 }), false);
    assert.strictEqual(deepEqual([1, 2], [1, 2, 3]), false);
  });
});
