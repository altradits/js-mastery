import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { throttle } from "./solution.js";

describe("191 - Throttle Function", () => {
  test("throttle executes at most once per interval", async () => {
    let calls = 0;
    const fn = throttle(() => { calls++; }, 40);
    fn();
    fn();
    assert.strictEqual(calls, 1);
    await new Promise(r => setTimeout(r, 60));
    fn();
    assert.strictEqual(calls, 2);
  });
});
