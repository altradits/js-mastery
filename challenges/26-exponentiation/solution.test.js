import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { power } from "./solution.js";

describe("26 - Exponentiation", () => {
  test("power(base, exp) raises base to exponent", () => {
    assert.strictEqual(power(2, 3), 8);
    assert.strictEqual(power(5, 2), 25);
  });
});
