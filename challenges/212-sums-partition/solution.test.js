import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sums } from "./solution.js";

describe("212 - Sums Partition", () => {
  test("sums computes all partitions", () => {
    assert.deepStrictEqual(sums(4), [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]);
    assert.deepStrictEqual(sums(1), []);
  });
});
