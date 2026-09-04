import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { roundDown, roundUp } from "./solution.js";

describe("111 - Math Floor & Ceil", () => {
  test("roundDown and roundUp round accurately", () => {
    assert.strictEqual(roundDown(4.9), 4);
    assert.strictEqual(roundUp(4.1), 5);
  });
});
