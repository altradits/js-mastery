import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { biggie, smalls } from "./solution.js";

describe("195 - Biggie Smalls", () => {
  test("biggie and smalls represent infinities", () => {
    assert.strictEqual(biggie, Infinity);
    assert.strictEqual(smalls, -Infinity);
    assert.ok(biggie > Number.MAX_VALUE);
    assert.ok(smalls < -Number.MAX_VALUE);
  });
});
