import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { FinalAttempt } from "./solution.js";

describe("230 - Final Attempt", () => {
  test("retries failing async operation", async () => {
    let calls = 0;
    const flake = async () => {
      calls++;
      if (calls < 3) throw new Error("Flake fail");
      return "success";
    };

    const res = await FinalAttempt(flake, 3, 10);
    assert.strictEqual(res, "success");
    assert.strictEqual(calls, 3);
  });
});
