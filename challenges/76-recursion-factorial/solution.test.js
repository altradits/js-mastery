import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { factorial } from "./solution.js";

describe("76 - Factorial", () => {
  test("factorial calculates n!", () => {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(1), 1);
  });
});
