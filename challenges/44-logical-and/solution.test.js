import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { both } from "./solution.js";

describe("44 - Logical AND", () => {
  test("both evaluates &&", () => {
    assert.strictEqual(both(true, "ok"), "ok");
    assert.strictEqual(both(false, "ok"), false);
  });
});
