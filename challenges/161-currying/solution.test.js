import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { curryAdd } from "./solution.js";

describe("161 - Currying", () => {
  test("curryAdd adds across two invocations", () => {
    assert.strictEqual(curryAdd(5)(10), 15);
  });
});
