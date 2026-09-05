import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { pipeline } from "./solution.js";

describe("240 - Functional Pipeline", () => {
  test("executes pipeline with trace", () => {
    const res = pipeline(2, x => x + 3, x => x * 4);
    assert.strictEqual(res.result, 20);
    assert.strictEqual(res.steps.length, 2);
    assert.strictEqual(res.steps[0].output, 5);
  });
});
