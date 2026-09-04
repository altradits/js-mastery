import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sameSign } from "./solution.js";

describe("197 - Same Sign", () => {
  test("sameSign compares signs correctly", () => {
    assert.strictEqual(sameSign(3, 4), true);
    assert.strictEqual(sameSign(-3, -4), true);
    assert.strictEqual(sameSign(0, 0), true);
    assert.strictEqual(sameSign(3, -4), false);
  });
});
