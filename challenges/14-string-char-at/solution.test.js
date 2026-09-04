import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getCharAt } from "./solution.js";

describe("14 - String charAt", () => {
  test("getCharAt returns character at index", () => {
    assert.strictEqual(getCharAt("cat", 1), "a");
    assert.strictEqual(getCharAt("cat", 10), "");
  });
});
