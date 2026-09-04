import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { keepFirstLast } from "./solution.js";

describe("199 - Keep First Last", () => {
  test("keepFirstLast slices boundaries properly", () => {
    assert.strictEqual(keepFirstLast("abcdef"), "abef");
    assert.strictEqual(keepFirstLast("hi"), "hi");
    assert.strictEqual(keepFirstLast("1234"), "1234");
  });
});
