import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { duplicateEach } from "./solution.js";

describe("138 - Array FlatMap", () => {
  test("duplicateEach duplicates each item with flatMap", () => {
    assert.deepStrictEqual(duplicateEach([1, 2]), [1, 1, 2, 2]);
  });
});
