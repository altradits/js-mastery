import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { multiplyLoop } from "./solution.js";

describe("77 - Multiply Loop", () => {
  test("multiplyLoop multiplies without *", () => {
    assert.strictEqual(multiplyLoop(4, 5), 20);
    assert.strictEqual(multiplyLoop(4, -3), -12);
    assert.strictEqual(multiplyLoop(-2, -3), 6);
    assert.strictEqual(multiplyLoop(5, 0), 0);
  });
});
