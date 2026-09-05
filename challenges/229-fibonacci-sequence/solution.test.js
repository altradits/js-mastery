import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { fibonacci } from "./solution.js";

describe("229 - Fibonacci Sequence", () => {
  test("computes nth fibonacci number", () => {
    assert.strictEqual(fibonacci(0), 0);
    assert.strictEqual(fibonacci(1), 1);
    assert.strictEqual(fibonacci(2), 1);
    assert.strictEqual(fibonacci(6), 8);
    assert.strictEqual(fibonacci(7), 13);
  });
});
