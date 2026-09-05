import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { AsyncCache } from "./solution.js";

describe("259 - Async Cache TTL", () => {
  test("caches and invalidates based on tags", async () => {
    const cache = new AsyncCache();
    let fetchCount = 0;
    const fetchUser = async (id) => {
      fetchCount++;
      return { id, name: "User " + id };
    };

    const res1 = await cache.wrap("user_1", () => fetchUser(1), { tags: ["users"] });
    const res2 = await cache.wrap("user_1", () => fetchUser(1), { tags: ["users"] });
    assert.strictEqual(fetchCount, 1);
    assert.deepStrictEqual(res1, res2);

    cache.invalidateTag("users");
    const res3 = await cache.wrap("user_1", () => fetchUser(1), { tags: ["users"] });
    assert.strictEqual(fetchCount, 2);
  });
});