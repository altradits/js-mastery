import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { applyCallback } from "./solution.js";

describe("156 - Callback Apply", () => {
  test("applyCallback invokes callback with argument", () => {
    assert.strictEqual(applyCallback(n => n * 3, 4), 12);
  });
});
