import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { nested } from "./solution.js";

describe("55 - Deep Freeze", () => {
  test("nested and nested.inner are both frozen", () => {
    assert.ok(Object.isFrozen(nested));
    assert.ok(Object.isFrozen(nested.inner));
  });
});
