import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { rightShift } from "./solution.js";

describe("155 - Right Shift", () => {
  test("rightShift shifts bits right", () => {
    assert.strictEqual(rightShift(20, 2), 5);
  });
});
