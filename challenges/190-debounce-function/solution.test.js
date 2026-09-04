import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { debounce } from "./solution.js";

describe("190 - Debounce Function", () => {
  test("debounce delays execution until quiet", async () => {
    let count = 0;
    const inc = debounce(() => { count++; }, 50);
    inc();
    inc();
    inc();
    assert.strictEqual(count, 0);
    await new Promise(r => setTimeout(r, 80));
    assert.strictEqual(count, 1);
  });
});
