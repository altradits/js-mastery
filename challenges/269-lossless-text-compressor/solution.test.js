import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { compressText, decompressText } from "./solution.js";

describe("269 - Lossless Text Compressor", () => {
  test("reversibly compresses and decompresses text payloads", () => {
    const original = "JavaScript is awesome! JavaScript is fast. JavaScript powers the web! aaaaaaaa";
    const compressed = compressText(original);
    const restored = decompressText(compressed);

    assert.strictEqual(restored, original);
    assert.strictEqual(compressed.dict.includes("JavaScript"), true);
  });
});