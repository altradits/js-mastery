import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { multAssign } from "./solution.js";

describe("30 - Multiplication Assignment", () => {
  test("multAssign updates total with *=", () => {
    assert.strictEqual(multAssign(4, 3), 12);
  });
});
