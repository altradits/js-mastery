import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { modulo } from "./solution.js";

describe("25 - Modulo", () => {
  test("modulo(a, b) returns remainder", () => {
    assert.strictEqual(modulo(7, 3), 1);
    assert.strictEqual(modulo(10, 2), 0);
  });
});
