import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { bitwiseNot } from "./solution.js";

describe("153 - Bitwise NOT", () => {
  test("bitwiseNot inverts bits", () => {
    assert.strictEqual(bitwiseNot(5), -6);
  });
});
