import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { palindromicChain } from "./solution.js";

describe("238 - Palindromic Chain", () => {
  test("calculates palindrome chain", () => {
    assert.deepStrictEqual(palindromicChain(87), { steps: 4, palindrome: 4884 });
    assert.deepStrictEqual(palindromicChain(121), { steps: 0, palindrome: 121 });
  });
});
