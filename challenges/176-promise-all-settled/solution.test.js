import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { checkAllOutcomes } from "./solution.js";

describe("176 - Promise allSettled", () => {
  test("checkAllOutcomes awaits all outcomes safely", async () => {
    const results = await checkAllOutcomes([Promise.resolve(42), Promise.reject(new Error("fail"))]);
    assert.strictEqual(results[0].status, "fulfilled");
    assert.strictEqual(results[1].status, "rejected");
  });
});
