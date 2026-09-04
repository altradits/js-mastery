import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isGreater } from "./solution.js";

describe("36 - Greater Than", () => {
  test("isGreater compares values", () => {
    assert.strictEqual(isGreater(10, 5), true);
    assert.strictEqual(isGreater(5, 10), false);
  });
});
