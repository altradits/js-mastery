import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getAsyncValue } from "./solution.js";

describe("171 - Promise Resolve", () => {
  test("getAsyncValue returns resolved promise", async () => {
    const res = await getAsyncValue("ready");
    assert.strictEqual(res, "ready");
  });
});
