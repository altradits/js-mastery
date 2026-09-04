import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { superTypeOf } from "./solution.js";

describe("182 - Super Type Of", () => {
  test("superTypeOf correctly reflects types", () => {
    assert.strictEqual(superTypeOf(null), "null");
    assert.strictEqual(superTypeOf(undefined), "undefined");
    assert.strictEqual(superTypeOf([]), "array");
    assert.strictEqual(superTypeOf(new Set()), "set");
  });
});
