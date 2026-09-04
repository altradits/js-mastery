import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { multiplyRecursive } from "./solution.js";

describe("78 - Multiply Recursive", () => {
  test("multiplyRecursive multiplies recursively without *", () => {
    assert.strictEqual(multiplyRecursive(4, 5), 20);
    assert.strictEqual(multiplyRecursive(4, -3), -12);
    assert.strictEqual(multiplyRecursive(-3, -3), 9);
    assert.strictEqual(multiplyRecursive(0, 10), 0);
  });
});
