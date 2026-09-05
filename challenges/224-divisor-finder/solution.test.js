import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { divisors } from "./solution.js";

describe("224 - Divisors Finder", () => {
  test("finds all positive divisors", () => {
    assert.deepStrictEqual(divisors(12), [1, 2, 3, 4, 6, 12]);
    assert.deepStrictEqual(divisors(13), [1, 13]);
    assert.deepStrictEqual(divisors(1), [1]);
  });
});
