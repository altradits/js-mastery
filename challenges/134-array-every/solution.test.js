import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { allPositive } from "./solution.js";

describe("134 - Array Every", () => {
  test("allPositive validates every element", () => {
    assert.strictEqual(allPositive([1, 2, 3]), true);
  });
});
