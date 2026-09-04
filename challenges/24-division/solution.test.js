import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { divide } from "./solution.js";

describe("24 - Division", () => {
  test("divide(a, b) returns quotient", () => {
    assert.strictEqual(divide(20, 4), 5);
    assert.strictEqual(divide(10, 2), 5);
  });
});
