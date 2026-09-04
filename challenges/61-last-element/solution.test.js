import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { last } from "./solution.js";

describe("61 - Last Element", () => {
  test("last returns last item", () => {
    assert.strictEqual(last([10, 20, 30]), 30);
  });
});
