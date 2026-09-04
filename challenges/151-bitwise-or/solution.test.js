import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { bitwiseOr } from "./solution.js";

describe("151 - Bitwise OR", () => {
  test("bitwiseOr computes bitwise OR", () => {
    assert.strictEqual(bitwiseOr(5, 2), 7);
  });
});
