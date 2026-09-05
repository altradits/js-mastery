import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createBlock, verifyChain } from "./solution.js";

describe("272 - Crypto Hash Chain", () => {
  test("creates verifiable chain and detects tamper attempts", () => {
    const b0 = createBlock(0, { tx: "genesis" });
    const b1 = createBlock(1, { tx: "A -> B 10" }, b0.hash);
    const b2 = createBlock(2, { tx: "B -> C 5" }, b1.hash);

    const chain = [b0, b1, b2];
    assert.strictEqual(verifyChain(chain), true);

    // Tamper with data
    chain[1].data.tx = "A -> B 1000";
    assert.strictEqual(verifyChain(chain), false);
  });
});