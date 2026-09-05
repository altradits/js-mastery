import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { evaluateMathExpression } from "./solution.js";

describe("264 - Shunting-Yard Math Evaluator", () => {
  test("evaluates expressions with operator precedence and parentheses", () => {
    assert.strictEqual(evaluateMathExpression("3 + 4 * 2"), 11);
    assert.strictEqual(evaluateMathExpression("(3 + 4) * 2"), 14);
    assert.strictEqual(evaluateMathExpression("2 ^ 3 + 4 / 2"), 10);
    assert.strictEqual(evaluateMathExpression("100 - (20 + 5 * 2)"), 70);
  });
});