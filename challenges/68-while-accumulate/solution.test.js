import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { times5 } from "./solution.js";

describe("68 - While Accumulator", () => {
  test("times5 multiplies number by 5 using repeated addition", () => {
    assert.strictEqual(times5(2), 10);
    assert.strictEqual(times5(5), 25);
  });
});
