import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createCounter } from "./solution.js";

describe("160 - Closure", () => {
  test("createCounter maintains private state", () => {
    const c1 = createCounter();
    assert.strictEqual(c1(), 1);
    assert.strictEqual(c1(), 2);
  });
});
