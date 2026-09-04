import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { negate } from "./solution.js";

describe("28 - Unary Negation", () => {
  test("negate negates value", () => {
    assert.strictEqual(negate(5), -5);
    assert.strictEqual(negate(-10), 10);
  });
});
