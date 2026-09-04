import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { retryAsync } from "./solution.js";

describe("192 - Async Retry", () => {
  test("retryAsync succeeds on eventual success", async () => {
    let attempts = 0;
    const fn = async () => {
      attempts++;
      if (attempts < 3) throw new Error("Fail");
      return "Success";
    };
    const result = await retryAsync(fn, 3, 10);
    assert.strictEqual(result, "Success");
    assert.strictEqual(attempts, 3);
  });
});
