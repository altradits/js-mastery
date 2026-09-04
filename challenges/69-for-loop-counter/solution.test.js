import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sumUpTo } from "./solution.js";

describe("69 - For Loop Counter", () => {
  test("sumUpTo sums 1 to n", () => {
    assert.strictEqual(sumUpTo(5), 15);
    assert.strictEqual(sumUpTo(3), 6);
  });
});
