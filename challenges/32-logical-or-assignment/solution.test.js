import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { orAssign } from "./solution.js";

describe("32 - Logical OR Assignment", () => {
  test("orAssign assigns only when falsy", () => {
    assert.strictEqual(orAssign(0, 5), 5);
    assert.strictEqual(orAssign(10, 5), 10);
  });
});
