import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { repeatStr } from "./solution.js";

describe("90 - String Repeat", () => {
  test("repeatStr repeats string count times", () => {
    assert.strictEqual(repeatStr("abc", 3), "abcabcabc");
    assert.strictEqual(repeatStr("hello", 0), "");
  });
});
