import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { split } from "./solution.js";

describe("209 - Unbreakable Split", () => {
  test("split separates strings into array", () => {
    assert.deepStrictEqual(split("a-b-c", "-"), ["a", "b", "c"]);
    assert.deepStrictEqual(split("hello", ""), ["h", "e", "l", "l", "o"]);
  });
});
