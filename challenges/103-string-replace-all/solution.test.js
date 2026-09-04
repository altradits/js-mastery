import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { replaceEvery } from "./solution.js";

describe("103 - String replaceAll", () => {
  test("replaceEvery replaces all occurrences", () => {
    assert.strictEqual(replaceEvery("a b a", "a", "x"), "x b x");
  });
});
