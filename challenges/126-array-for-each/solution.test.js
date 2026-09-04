import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { tally } from "./solution.js";

describe("126 - Array forEach", () => {
  test("tally sums numbers with forEach", () => {
    assert.strictEqual(tally([1, 2, 3]), 6);
  });
});
