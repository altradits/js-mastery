import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { less } from "./solution.js";

describe("20 - Decrement", () => {
  test("less(n) returns n - 1", () => {
    assert.strictEqual(less(5), 4);
    assert.strictEqual(less(0), -1);
  });
});
