import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { times5 } from "./solution.js";

describe("75 - Recursion Accumulator", () => {
  test("times5 calculates 5 * n using recursion", () => {
    assert.strictEqual(times5(5), 25);
    assert.strictEqual(times5(2), 10);
  });
});
