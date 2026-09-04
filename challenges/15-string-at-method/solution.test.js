import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getAt } from "./solution.js";

describe("15 - String at", () => {
  test("getAt supports negative indexing", () => {
    assert.strictEqual(getAt("hello", -1), "o");
    assert.strictEqual(getAt("hello", 0), "h");
  });
});
