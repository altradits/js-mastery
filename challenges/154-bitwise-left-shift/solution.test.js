import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { leftShift } from "./solution.js";

describe("154 - Left Shift", () => {
  test("leftShift shifts bits left", () => {
    assert.strictEqual(leftShift(5, 1), 10);
  });
});
