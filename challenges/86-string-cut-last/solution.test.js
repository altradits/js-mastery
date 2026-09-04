import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { cutLast } from "./solution.js";

describe("86 - Cut Last", () => {
  test("cutLast removes last 2 chars", () => {
    assert.strictEqual(cutLast("abcdef"), "abcd");
  });
});
