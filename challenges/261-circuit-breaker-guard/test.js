import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createCircuitBreaker } from "./solution.js";

describe("261 - Circuit Breaker Guard", () => {
  test("trips to OPEN state after consecutive failures", async () => {
    let fail = true;
    const service = async () => {
      if (fail) throw new Error("Service down");
      return "OK";
    };

    const breaker = createCircuitBreaker(service, { failureThreshold: 2, recoveryTimeout: 50 });

    await assert.rejects(() => breaker());
    await assert.rejects(() => breaker());
    assert.strictEqual(breaker.getState(), "OPEN");

    // Fast-fail while open
    await assert.rejects(() => breaker(), /Circuit breaker is OPEN/);

    // Wait for recovery timeout
    await new Promise(r => setTimeout(r, 60));
    fail = false;
    const res = await breaker();
    assert.strictEqual(res, "OK");
    assert.strictEqual(breaker.getState(), "CLOSED");
  });
});