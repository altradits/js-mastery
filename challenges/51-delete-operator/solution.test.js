import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { removeKey } from "./solution.js";

describe("51 - Delete Operator", () => {
  test("removeKey removes property", () => {
    const target = { a: 1, b: 2 };
    removeKey(target, "a");
    assert.strictEqual("a" in target, false);
  });
});
