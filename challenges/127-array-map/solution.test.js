import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { doubleAll } from "./solution.js";

describe("127 - Array Map", () => {
  test("doubleAll doubles each number", () => {
    assert.deepStrictEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
  });
});
