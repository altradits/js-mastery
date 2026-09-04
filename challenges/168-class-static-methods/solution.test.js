import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { MathHelper } from "./solution.js";

describe("168 - Static Methods", () => {
  test("MathHelper.add executes statically", () => {
    assert.strictEqual(MathHelper.add(2, 3), 5);
  });
});
