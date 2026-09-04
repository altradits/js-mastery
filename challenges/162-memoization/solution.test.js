import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { memoize } from "./solution.js";

describe("162 - Memoization", () => {
  test("memoize caches computation", () => {
    let calls = 0;
    const square = memoize((n) => {
      calls++;
      return n * n;
    });
    assert.strictEqual(square(5), 25);
    assert.strictEqual(square(5), 25);
    assert.strictEqual(calls, 1);
  });
});
