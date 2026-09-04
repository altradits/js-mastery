import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { DNA } from "./solution.js";

describe("205 - DNA Transcription", () => {
  test("DNA converts RNA nucleotides to DNA", () => {
    assert.strictEqual(DNA("CGAU"), "GCTA");
    assert.strictEqual(DNA(""), "");
  });
});
