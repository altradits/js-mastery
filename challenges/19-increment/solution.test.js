import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { more } from "./solution.js";

describe("19 - Increment", () => {
  test("more(n) returns n + 1", () => {
    assert.strictEqual(more(5), 6);
    assert.strictEqual(more(-1), 0);
  });
});
