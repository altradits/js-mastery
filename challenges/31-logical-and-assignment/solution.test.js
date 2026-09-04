import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { andAssign } from "./solution.js";

describe("31 - Logical AND Assignment", () => {
  test("andAssign assigns only when truthy", () => {
    assert.strictEqual(andAssign(1, 2), 2);
    assert.strictEqual(andAssign(0, 2), 0);
  });
});
