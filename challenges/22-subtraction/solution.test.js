import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sub } from "./solution.js";

describe("22 - Subtraction", () => {
  test("sub(a, b) returns difference", () => {
    assert.strictEqual(sub(20, 10), 10);
    assert.strictEqual(sub(5, 10), -5);
  });
});
