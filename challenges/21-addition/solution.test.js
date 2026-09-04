import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { add } from "./solution.js";

describe("21 - Addition", () => {
  test("add(a, b) returns sum", () => {
    assert.strictEqual(add(10, 20), 30);
    assert.strictEqual(add(-5, 5), 0);
  });
});
