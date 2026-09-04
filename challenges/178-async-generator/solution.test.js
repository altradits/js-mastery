import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { rangeAsync } from "./solution.js";

describe("178 - Async Generator", () => {
  test("rangeAsync yields values asynchronously", async () => {
    const items = [];
    for await (const n of rangeAsync(1, 3)) {
      items.push(n);
    }
    assert.deepStrictEqual(items, [1, 2, 3]);
  });
});
