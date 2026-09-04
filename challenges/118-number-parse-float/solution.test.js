import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { parseDecimal } from "./solution.js";

describe("118 - Number ParseFloat", () => {
  test("parseDecimal parses floating point value", () => {
    assert.strictEqual(parseDecimal("3.14em"), 3.14);
  });
});
