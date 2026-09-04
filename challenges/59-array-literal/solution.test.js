import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { numbers } from "./solution.js";

describe("59 - Array Literal", () => {
  test("numbers contains [1, 2, 3]", () => {
    assert.deepStrictEqual(numbers, [1, 2, 3]);
  });
});
