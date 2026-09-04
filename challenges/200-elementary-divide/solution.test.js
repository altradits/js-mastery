import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { divide } from "./solution.js";

describe("200 - Elementary Divide", () => {
  test("divide computes integer quotient without /", () => {
    assert.strictEqual(divide(10, 2), 5);
    assert.strictEqual(divide(11, 3), 3);
    assert.strictEqual(divide(-10, 2), -5);
  });
});
