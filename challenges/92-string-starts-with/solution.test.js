import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { startsWithPrefix } from "./solution.js";

describe("92 - String startsWith", () => {
  test("startsWithPrefix checks beginning of string", () => {
    assert.strictEqual(startsWithPrefix("https://devdocs.io", "https://"), true);
  });
});
