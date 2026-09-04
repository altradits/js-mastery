import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { round } from "./solution.js";

describe("214 - Custom Round", () => {
  test("round rounds to nearest integer", () => {
    assert.strictEqual(round(4.6), 5);
    assert.strictEqual(round(4.2), 4);
    assert.strictEqual(round(-4.6), -5);
  });
});
