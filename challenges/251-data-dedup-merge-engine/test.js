import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { dedupAndMerge } from "./solution.js";

describe("251 - Data Dedup & Merge Engine", () => {
  test("merges collections with conflicting fields", () => {
    const listA = [{ id: 1, name: "Alice", score: 10 }, { id: 2, name: "Bob", score: 20 }];
    const listB = [{ id: 1, score: 25, active: true }, { id: 3, name: "Charlie", score: 30 }];

    const merged = dedupAndMerge([listA, listB], x => x.id, (prev, curr) => ({
      ...prev,
      ...curr,
      score: Math.max(prev.score || 0, curr.score || 0)
    }));

    assert.strictEqual(merged.length, 3);
    assert.deepStrictEqual(merged[0], { id: 1, name: "Alice", score: 25, active: true });
    assert.strictEqual(merged[1].name, "Bob");
    assert.strictEqual(merged[2].name, "Charlie");
  });

  test("handles empty and single collections", () => {
    const res = dedupAndMerge([[], [{ id: "a" }]], x => x.id);
    assert.strictEqual(res.length, 1);
    assert.strictEqual(res[0].id, "a");
  });
});