import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { biggie, smalls } from "./solution.js";

describe("11 - Biggie Smalls: Infinity & Boundaries", () => {
  test("biggie is positive Infinity", () => {
    assert.strictEqual(typeof biggie, "number");
    assert.strictEqual(biggie, Infinity);
    assert.ok(biggie > Number.MAX_VALUE);
  });

  test("smalls is negative Infinity", () => {
    assert.strictEqual(typeof smalls, "number");
    assert.strictEqual(smalls, -Infinity);
    assert.ok(smalls < -Number.MAX_VALUE);
  });

  test("boundary comparisons hold", () => {
    assert.ok(smalls < biggie);
    assert.ok(!Number.isFinite(biggie));
    assert.ok(!Number.isFinite(smalls));
  });
});
