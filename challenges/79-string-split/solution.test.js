import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { words } from "./solution.js";

describe("79 - String Split", () => {
  test("words splits string into array", () => {
    assert.deepStrictEqual(words("hello world"), ["hello", "world"]);
  });
});
