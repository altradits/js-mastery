import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { findIndex } from "./solution.js";

describe("94 - String indexOf", () => {
  test("findIndex finds first occurrence index", () => {
    assert.strictEqual(findIndex("hello world", "world"), 6);
  });
});
