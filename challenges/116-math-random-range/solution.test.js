import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getRandomInt } from "./solution.js";

describe("116 - Math Random Range", () => {
  test("getRandomInt stays within bounds", () => {
    for (let i = 0; i < 50; i++) {
      const val = getRandomInt(10, 20);
      assert.ok(val >= 10 && val <= 20);
      assert.strictEqual(Number.isInteger(val), true);
    }
  });
});
