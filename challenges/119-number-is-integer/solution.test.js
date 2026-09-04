import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isInt } from "./solution.js";

describe("119 - Number isInteger", () => {
  test("isInt validates integers", () => {
    assert.strictEqual(isInt(4), true);
    assert.strictEqual(isInt(4.5), false);
  });
});
