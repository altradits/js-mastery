import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { promisePool } from "./solution.js";

describe("262 - Promise Concurrency Pool", () => {
  test("maintains order and respects concurrency bounds", async () => {
    let running = 0;
    let max = 0;

    const tasks = [10, 20, 5, 15].map((ms, idx) => async () => {
      running++;
      max = Math.max(max, running);
      await new Promise(r => setTimeout(r, ms));
      running--;
      return `Task ${idx} finished`;
    });

    const res = await promisePool(tasks, 2);
    assert.strictEqual(res.length, 4);
    assert.strictEqual(res[0], "Task 0 finished");
    assert.strictEqual(res[2], "Task 2 finished");
    assert.strictEqual(max <= 2, true);
  });
});