import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getPair } from "./solution.js";

describe("65 - Array Destructuring", () => {
  test("getPair extracts first two elements", () => {
    assert.deepStrictEqual(getPair([10, 20, 30]), { first: 10, second: 20 });
  });
});
