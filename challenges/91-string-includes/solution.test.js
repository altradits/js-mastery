import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { hasSubstring } from "./solution.js";

describe("91 - String Includes", () => {
  test("hasSubstring validates substring presence", () => {
    assert.strictEqual(hasSubstring("JavaScript", "Script"), true);
    assert.strictEqual(hasSubstring("JavaScript", "Python"), false);
  });
});
