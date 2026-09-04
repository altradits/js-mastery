import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { invert } from "./solution.js";

describe("42 - Logical NOT", () => {
  test("invert inverts boolean value", () => {
    assert.strictEqual(invert(true), false);
    assert.strictEqual(invert(0), true);
  });
});
