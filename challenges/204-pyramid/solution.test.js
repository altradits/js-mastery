import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { pyramid } from "./solution.js";

describe("204 - Pyramid Pattern", () => {
  test("pyramid produces centered layout", () => {
    assert.strictEqual(pyramid("*", 2), " *\n***");
    assert.strictEqual(pyramid("a", 3), "  a\n aaa\naaaaa");
  });
});
