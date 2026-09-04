import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { findExpression } from "./solution.js";

describe("211 - Find Expression", () => {
  test("findExpression finds valid arithmetic path", () => {
    const res = findExpression(8);
    assert.ok(typeof res === "string" && res.startsWith("1"));
    assert.strictEqual(findExpression(7), undefined);
  });
});
