import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isPalindrome } from "./solution.js";

describe("02 - isPalindrome", () => {
  test("identifies simple valid palindrome", () => {
    assert.strictEqual(isPalindrome("racecar"), true);
  });

  test("identifies false palindrome", () => {
    assert.strictEqual(isPalindrome("hello"), false);
  });

  test("ignores casing and spaces", () => {
    assert.strictEqual(isPalindrome("A man a plan a canal Panama"), true);
  });

  test("handles punctuation", () => {
    assert.strictEqual(isPalindrome("No 'x' in Nixon"), true);
  });

  test("handles empty or single-character string", () => {
    assert.strictEqual(isPalindrome(""), true);
    assert.strictEqual(isPalindrome("a"), true);
  });
});