import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { factorial } from "./solution.js";

describe("228 - Factorial Sequence", () => {
  test("calculates factorial", () => {
    assert.strictEqual(factorial(0), 1);
    assert.strictEqual(factorial(1), 1);
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(6), 720);
  });
});
