import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { fromCodes } from "./solution.js";

describe("105 - String fromCharCode", () => {
  test("fromCodes constructs string from UTF-16 codes", () => {
    assert.strictEqual(fromCodes(72, 105), "Hi");
  });
});
