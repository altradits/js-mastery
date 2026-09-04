import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sleep } from "./solution.js";

describe("172 - Async Sleep", () => {
  test("sleep pauses execution", async () => {
    const start = Date.now();
    await sleep(20);
    const diff = Date.now() - start;
    assert.ok(diff >= 15);
  });
});
