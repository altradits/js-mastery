import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isLess } from "./solution.js";

describe("37 - Less Than", () => {
  test("isLess compares values", () => {
    assert.strictEqual(isLess(3, 7), true);
  });
});
