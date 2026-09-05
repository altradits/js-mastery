import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { levenshteinDistance, fuzzySearch } from "./solution.js";

describe("267 - Levenshtein Fuzzy Search", () => {
  test("computes exact edit distance", () => {
    assert.strictEqual(levenshteinDistance("kitten", "sitting"), 3);
    assert.strictEqual(levenshteinDistance("book", "back"), 2);
    assert.strictEqual(levenshteinDistance("same", "same"), 0);
  });

  test("ranks search results by closest edit distance", () => {
    const words = ["javascript", "typescript", "coffeescript", "ecmascript"];
    const matches = fuzzySearch("javascrip", words, 2);
    assert.strictEqual(matches[0], "javascript");
  });
});