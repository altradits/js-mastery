import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { fetchAll } from "./solution.js";

describe("174 - Promise All", () => {
  test("fetchAll awaits all promises concurrently", async () => {
    const results = await fetchAll([Promise.resolve(1), Promise.resolve(2)]);
    assert.deepStrictEqual(results, [1, 2]);
  });
});
