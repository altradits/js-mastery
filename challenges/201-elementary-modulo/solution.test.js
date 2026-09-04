import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { modulo } from "./solution.js";

describe("201 - Elementary Modulo", () => {
  test("modulo computes remainder without %", () => {
    assert.strictEqual(modulo(10, 3), 1);
    assert.strictEqual(modulo(14, 7), 0);
    assert.strictEqual(modulo(-10, 3), -1);
  });
});
