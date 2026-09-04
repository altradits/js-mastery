import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { join } from "./solution.js";

describe("210 - Unbreakable Join", () => {
  test("join combines elements into string", () => {
    assert.strictEqual(join(["a", "b", "c"], "-"), "a-b-c");
    assert.strictEqual(join([1, 2, 3]), "1,2,3");
  });
});
