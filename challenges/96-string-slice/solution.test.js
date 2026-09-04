import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getSubstring } from "./solution.js";

describe("96 - String Slice", () => {
  test("getSubstring extracts slice", () => {
    assert.strictEqual(getSubstring("hello world", 0, 5), "hello");
  });
});
