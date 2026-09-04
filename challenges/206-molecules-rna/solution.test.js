import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { RNA } from "./solution.js";

describe("206 - RNA Transcription", () => {
  test("RNA converts DNA nucleotides to RNA", () => {
    assert.strictEqual(RNA("GCTA"), "CGAU");
    assert.strictEqual(RNA(""), "");
  });
});
