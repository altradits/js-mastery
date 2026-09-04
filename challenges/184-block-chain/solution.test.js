import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { blockChain } from "./solution.js";

describe("184 - Block Chain", () => {
  test("blockChain links nodes", () => {
    const first = blockChain({ t: 1 });
    assert.strictEqual(first.index, 1);
    const second = first.chain({ t: 2 });
    assert.strictEqual(second.index, 2);
    assert.strictEqual(second.prev.hash, first.hash);
  });
});
