import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { nullishAssign } from "./solution.js";

describe("33 - Nullish Assignment", () => {
  test("nullishAssign assigns only for null or undefined", () => {
    assert.strictEqual(nullishAssign(null, 10), 10);
    assert.strictEqual(nullishAssign(0, 10), 0);
  });
});
