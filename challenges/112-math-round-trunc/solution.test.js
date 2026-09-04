import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { roundNearest, truncate } from "./solution.js";

describe("112 - Math Round & Trunc", () => {
  test("roundNearest and truncate work as expected", () => {
    assert.strictEqual(roundNearest(4.5), 5);
    assert.strictEqual(truncate(4.9), 4);
  });
});
