import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { findLastIndex } from "./solution.js";

describe("95 - String lastIndexOf", () => {
  test("findLastIndex finds last occurrence index", () => {
    assert.strictEqual(findLastIndex("banana", "a"), 5);
  });
});
