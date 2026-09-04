import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { bitwiseAnd } from "./solution.js";

describe("150 - Bitwise AND", () => {
  test("bitwiseAnd computes bitwise AND", () => {
    assert.strictEqual(bitwiseAnd(5, 1), 1);
  });
});
