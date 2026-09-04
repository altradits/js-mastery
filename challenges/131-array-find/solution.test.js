import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { findFirstNegative } from "./solution.js";

describe("131 - Array Find", () => {
  test("findFirstNegative finds first matching element", () => {
    assert.strictEqual(findFirstNegative([10, 20, -5, 30]), -5);
  });
});
