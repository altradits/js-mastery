import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { bool } from "./solution.js";

describe("08 - Primitive Boolean", () => {
  test("bool is true", () => {
    assert.strictEqual(typeof bool, "boolean");
    assert.strictEqual(bool, true);
  });
});
