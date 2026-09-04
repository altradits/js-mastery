import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { hasKey } from "./solution.js";

describe("40 - In Operator", () => {
  test("hasKey checks property presence with in", () => {
    assert.strictEqual(hasKey({ a: 1 }, "a"), true);
    assert.strictEqual(hasKey({ a: 1 }, "b"), false);
  });
});
