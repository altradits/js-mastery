import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { reverseString } from "./solution.js";

describe("01 - reverseString", () => {
  test("reverses standard ASCII string", () => {
    assert.strictEqual(reverseString("hello"), "olleh");
  });

  test("handles alphanumeric strings and casing", () => {
    assert.strictEqual(reverseString("Zone01"), "10enoZ");
  });

  test("handles single characters", () => {
    assert.strictEqual(reverseString("a"), "a");
  });

  test("handles empty string", () => {
    assert.strictEqual(reverseString(""), "");
  });
});