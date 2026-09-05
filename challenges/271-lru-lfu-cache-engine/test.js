import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { CacheEngine } from "./solution.js";

describe("271 - LRU LFU Cache Engine", () => {
  test("evicts least recently used under LRU policy", () => {
    const cache = new CacheEngine({ capacity: 2, policy: "LRU" });
    cache.set("a", 1);
    cache.set("b", 2);
    cache.get("a"); // a accessed
    cache.set("c", 3); // b should be evicted

    assert.strictEqual(cache.has("a"), true);
    assert.strictEqual(cache.has("b"), false);
    assert.strictEqual(cache.has("c"), true);
  });

  test("evicts least frequently used under LFU policy", () => {
    const cache = new CacheEngine({ capacity: 2, policy: "LFU" });
    cache.set("a", 1);
    cache.set("b", 2);
    cache.get("a");
    cache.get("a"); // a freq = 3
    cache.get("b"); // b freq = 2
    cache.set("c", 3); // b should be evicted

    assert.strictEqual(cache.has("a"), true);
    assert.strictEqual(cache.has("b"), false);
  });
});