import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sumAll } from "./solution.js";

describe("159 - Rest Parameters", () => {
  test("sumAll sums indefinite arguments", () => {
    assert.strictEqual(sumAll(1, 2, 3, 4), 10);
  });
});
