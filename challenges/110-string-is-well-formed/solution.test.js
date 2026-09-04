import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { checkWellFormed } from "./solution.js";

describe("110 - String isWellFormed", () => {
  test("checkWellFormed detects valid Unicode strings", () => {
    assert.strictEqual(checkWellFormed("Hello 😀"), true);
    assert.strictEqual(checkWellFormed("\uD800"), false);
  });
});
