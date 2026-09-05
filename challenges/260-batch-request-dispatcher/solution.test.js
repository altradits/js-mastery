import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createBatchDispatcher } from "./solution.js";

describe("260 - Batch Request Dispatcher", () => {
  test("pools individual calls into single batch execution", async () => {
    let callCount = 0;
    const batchFetch = async (ids) => {
      callCount++;
      return ids.map(id => ({ id, name: "Entity " + id }));
    };

    const dispatch = createBatchDispatcher(batchFetch, { delayMs: 15 });

    const [u1, u2, u3] = await Promise.all([
      dispatch(1),
      dispatch(2),
      dispatch(3)
    ]);

    assert.strictEqual(callCount, 1);
    assert.strictEqual(u1.name, "Entity 1");
    assert.strictEqual(u2.name, "Entity 2");
    assert.strictEqual(u3.name, "Entity 3");
  });
});