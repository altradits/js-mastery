import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { areEqualCaseInsensitive } from "./solution.js";

describe("108 - Case Insensitive Compare", () => {
  test("areEqualCaseInsensitive matches regardless of case", () => {
    assert.strictEqual(areEqualCaseInsensitive("JavaScript", "javascript"), true);
  });
});
