import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { fallback } from "./solution.js";

describe("46 - Nullish Coalescing", () => {
  test("fallback respects nullish boundary", () => {
    assert.strictEqual(fallback(null, "def"), "def");
    assert.strictEqual(fallback(0, "def"), 0);
  });
});
