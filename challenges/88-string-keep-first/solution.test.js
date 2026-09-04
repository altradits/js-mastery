import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { keepFirst } from "./solution.js";

describe("88 - Keep First", () => {
  test("keepFirst retains first 2 chars", () => {
    assert.strictEqual(keepFirst("abcdef"), "ab");
  });
});
