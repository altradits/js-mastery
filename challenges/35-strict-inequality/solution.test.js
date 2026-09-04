import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { notEqual } from "./solution.js";

describe("35 - Strict Inequality", () => {
  test("notEqual checks strict inequality", () => {
    assert.strictEqual(notEqual(5, "5"), true);
    assert.strictEqual(notEqual(5, 5), false);
  });
});
