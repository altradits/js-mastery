import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { TokenBucket } from "./solution.js";

describe("266 - Token Bucket Rate Limiter", () => {
  test("consumes tokens and refuses when empty", () => {
    const bucket = new TokenBucket({ capacity: 3, refillRate: 10 });
    assert.strictEqual(bucket.consume(2), true);
    assert.strictEqual(bucket.consume(1), true);
    assert.strictEqual(bucket.consume(1), false);
  });

  test("refills tokens over time", async () => {
    const bucket = new TokenBucket({ capacity: 2, refillRate: 50 });
    bucket.consume(2);
    assert.strictEqual(bucket.consume(1), false);

    await new Promise(r => setTimeout(r, 40));
    assert.strictEqual(bucket.consume(1), true);
  });
});