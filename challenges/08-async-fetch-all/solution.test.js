import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { fetchAllSettledData } from "./solution.js";

describe("08 - asyncFetchAll", () => {
  test("executes multiple async tasks concurrently and returns values", async () => {
    const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Result A"), 10));
    const task2 = () => new Promise((resolve) => setTimeout(() => resolve("Result B"), 5));

    const results = await fetchAllSettledData([task1, task2]);
    assert.deepStrictEqual(results, [
      { status: "fulfilled", value: "Result A" },
      { status: "fulfilled", value: "Result B" }
    ]);
  });

  test("handles mixed resolved and rejected promises gracefully", async () => {
    const taskSuccess = () => Promise.resolve("OK");
    const taskFail = () => Promise.reject(new Error("Failed request"));

    const results = await fetchAllSettledData([taskSuccess, taskFail]);
    assert.strictEqual(results[0].status, "fulfilled");
    assert.strictEqual(results[0].value, "OK");
    assert.strictEqual(results[1].status, "rejected");
    assert.strictEqual(results[1].reason instanceof Error, true);
  });

  test("returns empty array for empty task input", async () => {
    const results = await fetchAllSettledData([]);
    assert.deepStrictEqual(results, []);
  });
});