import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { reverse } from "./solution.js";

describe("207 - Reverser Manual", () => {
  test("reverse reverses strings and arrays", () => {
    assert.strictEqual(reverse("hello"), "olleh");
    assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1]);
  });
});
