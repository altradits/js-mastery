import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isPerfectNum } from "./solution.js";

describe("239 - Perfect Number", () => {
  test("validates perfect numbers", () => {
    assert.strictEqual(isPerfectNum(6), true);
    assert.strictEqual(isPerfectNum(28), true);
    assert.strictEqual(isPerfectNum(496), true);
    assert.strictEqual(isPerfectNum(12), false);
  });
});
