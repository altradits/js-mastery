import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { addAsync } from "./solution.js";

describe("173 - Async Await", () => {
  test("addAsync resolves sum asynchronously", async () => {
    const sum = await addAsync(10, 20);
    assert.strictEqual(sum, 30);
  });
});
