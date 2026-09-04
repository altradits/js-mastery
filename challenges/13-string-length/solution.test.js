import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { strLength } from "./solution.js";

describe("13 - String Length", () => {
  test("strLength returns character count", () => {
    assert.strictEqual(strLength("hello"), 5);
    assert.strictEqual(strLength(""), 0);
  });
});
