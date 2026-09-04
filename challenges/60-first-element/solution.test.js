import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { first } from "./solution.js";

describe("60 - First Element", () => {
  test("first returns item at index 0", () => {
    assert.strictEqual(first([10, 20]), 10);
  });
});
