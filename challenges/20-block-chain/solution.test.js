import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { blockChain, hashCode } from "./solution.js";

describe("20 - Block Chain: Cryptographic Blockchain & Closures", () => {
  test("creates a valid genesis block with default prev", () => {
    const genesis = blockChain({ genesis: true });
    assert.strictEqual(genesis.index, 1);
    assert.deepStrictEqual(genesis.data, { genesis: true });
    assert.deepStrictEqual(genesis.prev, { index: 0, hash: "0" });
    assert.strictEqual(typeof genesis.hash, "string");
    assert.strictEqual(typeof genesis.chain, "function");
  });

  test("chains consecutive blocks properly", () => {
    const first = blockChain({ amount: 100 });
    const second = first.chain({ amount: 200 });
    const third = second.chain({ amount: 300 });

    assert.strictEqual(first.index, 1);
    assert.strictEqual(second.index, 2);
    assert.strictEqual(third.index, 3);

    assert.strictEqual(second.prev, first);
    assert.strictEqual(third.prev, second);

    const expectedSecondHash = hashCode(`2${first.hash}${JSON.stringify({ amount: 200 })}`);
    assert.strictEqual(second.hash, expectedSecondHash);
  });

  test("produces deterministic hashes for identical data structures", () => {
    const b1 = blockChain({ tx: "abc" });
    const b2 = blockChain({ tx: "abc" });
    assert.strictEqual(b1.hash, b2.hash);
  });
});
