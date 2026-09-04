import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getCodePoint } from "./solution.js";

describe("106 - String codePointAt", () => {
  test("getCodePoint returns full Unicode code point", () => {
    assert.strictEqual(getCodePoint("😀", 0), 128512);
  });
});
