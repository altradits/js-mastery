import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { checkFinite } from "./solution.js";

describe("120 - Number isFinite", () => {
  test("checkFinite validates finite numbers", () => {
    assert.strictEqual(checkFinite(100), true);
    assert.strictEqual(checkFinite(Infinity), false);
    assert.strictEqual(checkFinite(NaN), false);
  });
});
