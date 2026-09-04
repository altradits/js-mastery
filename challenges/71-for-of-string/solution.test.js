import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { countLetter } from "./solution.js";

describe("71 - For..Of String Count", () => {
  test("countLetter counts occurrences of character", () => {
    assert.strictEqual(countLetter("How are you today ?", "o"), 3);
    assert.strictEqual(countLetter("hello world", "l"), 3);
  });
});
