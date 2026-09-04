import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getFastest } from "./solution.js";

describe("175 - Promise Race", () => {
  test("getFastest returns first resolved value", async () => {
    const pFast = Promise.resolve("fast");
    const pSlow = new Promise(res => setTimeout(() => res("slow"), 50));
    const winner = await getFastest([pSlow, pFast]);
    assert.strictEqual(winner, "fast");
  });
});
