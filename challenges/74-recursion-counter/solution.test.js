import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { countTo } from "./solution.js";

describe("74 - Recursion Counter", () => {
  test("countTo recursively increments up to limit", () => {
    assert.strictEqual(countTo(10), 10);
    assert.strictEqual(countTo(0), 0);
  });
});
