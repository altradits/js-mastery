import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { TaskQueue } from "./solution.js";

describe("258 - Rate-Limited Task Queue", () => {
  test("executes tasks and respects concurrency limit", async () => {
    const queue = new TaskQueue({ concurrency: 2 });
    let active = 0;
    let maxActive = 0;

    const makeTask = (val) => async () => {
      active++;
      maxActive = Math.max(maxActive, active);
      await new Promise(r => setTimeout(r, 20));
      active--;
      return val * 2;
    };

    const results = await Promise.all([
      queue.add(makeTask(1)),
      queue.add(makeTask(2)),
      queue.add(makeTask(3))
    ]);

    assert.deepStrictEqual(results, [2, 4, 6]);
    assert.strictEqual(maxActive <= 2, true);
  });
});