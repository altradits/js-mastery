import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { keepLast } from "./solution.js";

describe("89 - Keep Last", () => {
  test("keepLast retains last 2 chars", () => {
    assert.strictEqual(keepLast("abcdef"), "ef");
  });
});
