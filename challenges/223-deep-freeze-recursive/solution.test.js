import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { deepFreeze } from "./solution.js";

describe("223 - Deep Freeze", () => {
  test("recursively freezes object", () => {
    const data = { a: 1, b: { c: 2, d: [3, 4] } };
    deepFreeze(data);
    assert.ok(Object.isFrozen(data));
    assert.ok(Object.isFrozen(data.b));
    assert.ok(Object.isFrozen(data.b.d));
  });
});
