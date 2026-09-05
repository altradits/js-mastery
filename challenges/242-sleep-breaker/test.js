import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sleepBreaker } from "./solution.js";

describe("242 - Sleep Breaker", () => {
  test("breaks sleep when breaker resolves early", async () => {
    const start = Date.now();
    const breaker = async () => {
      await new Promise(r => setTimeout(r, 20));
      return true;
    };
    await sleepBreaker(500, breaker);
    const elapsed = Date.now() - start;
    assert.ok(elapsed < 200);
  });
});
