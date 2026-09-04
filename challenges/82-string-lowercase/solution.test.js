import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { whisper } from "./solution.js";

describe("82 - String Lowercase", () => {
  test("whisper converts to lowercase", () => {
    assert.strictEqual(whisper("HELLO"), "hello");
  });
});
