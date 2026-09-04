import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { joinWords } from "./solution.js";

describe("18 - String Concat", () => {
  test("joinWords joins strings with space", () => {
    assert.strictEqual(joinWords("Hello", "World"), "Hello World");
  });
});
