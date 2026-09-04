import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { num } from "./solution.js";

describe("07 - Primitive Number", () => {
  test("num is a number", () => {
    assert.strictEqual(typeof num, "number");
    assert.ok(!Number.isNaN(num));
  });
});
