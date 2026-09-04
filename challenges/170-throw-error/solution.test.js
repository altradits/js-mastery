import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { requirePositive } from "./solution.js";

describe("170 - Throw Error", () => {
  test("requirePositive throws on non-positive input", () => {
    assert.strictEqual(requirePositive(10), 10);
    assert.throws(() => requirePositive(-1), /Number must be positive/);
  });
});
