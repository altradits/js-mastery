import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { containsItem } from "./solution.js";

describe("135 - Array Includes", () => {
  test("containsItem tests inclusion", () => {
    assert.strictEqual(containsItem(["apple", "banana"], "apple"), true);
  });
});
