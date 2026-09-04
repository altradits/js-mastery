import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { escapeStr } from "./solution.js";

describe("11 - Escape Characters", () => {
  test("escapeStr contains required escape characters", () => {
    assert.strictEqual(escapeStr, "`\\\"/'");
  });
});
