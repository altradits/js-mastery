import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { trunc } from "./solution.js";

describe("213 - Custom Trunc", () => {
  test("trunc truncates floating point numbers", () => {
    assert.strictEqual(trunc(4.9), 4);
    assert.strictEqual(trunc(-4.9), -4);
    assert.strictEqual(trunc(0), 0);
  });
});
