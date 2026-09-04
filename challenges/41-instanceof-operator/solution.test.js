import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isInstanceOf } from "./solution.js";

describe("41 - Instanceof Operator", () => {
  test("isInstanceOf validates prototype relationship", () => {
    assert.strictEqual(isInstanceOf([], Array), true);
    assert.strictEqual(isInstanceOf({}, Array), false);
  });
});
