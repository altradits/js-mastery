import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { obj } from "./solution.js";

describe("54 - Freeze Object", () => {
  test("obj is frozen object", () => {
    assert.strictEqual(typeof obj, "object");
    assert.ok(Object.isFrozen(obj));
  });
});
