import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { mergeAndTransform } from "./solution.js";

describe("237 - Object Lab", () => {
  test("merges and transforms object arrays", () => {
    const list = [{ name: "alice", score: 50 }, { level: 3 }];
    const res = mergeAndTransform(list, { name: s => s.toUpperCase(), score: s => s * 2 });
    assert.deepStrictEqual(res, { name: "ALICE", score: 100, level: 3 });
  });
});
