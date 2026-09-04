import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isEqual } from "./solution.js";

describe("34 - Strict Equality", () => {
  test("isEqual checks strict equality", () => {
    assert.strictEqual(isEqual(5, 5), true);
    assert.strictEqual(isEqual(5, "5"), false);
  });
});
