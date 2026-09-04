import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sign } from "./solution.js";

describe("196 - Sign Function", () => {
  test("sign correctly returns 1, -1, or 0", () => {
    assert.strictEqual(sign(42), 1);
    assert.strictEqual(sign(-42), -1);
    assert.strictEqual(sign(0), 0);
  });
});
