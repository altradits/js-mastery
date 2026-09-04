import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { nullVal } from "./solution.js";

describe("10 - Primitive Null", () => {
  test("nullVal is null", () => {
    assert.strictEqual(nullVal, null);
  });
});
