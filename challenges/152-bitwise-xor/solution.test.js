import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { bitwiseXor } from "./solution.js";

describe("152 - Bitwise XOR", () => {
  test("bitwiseXor computes XOR", () => {
    assert.strictEqual(bitwiseXor(5, 1), 4);
  });
});
