import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { cutFirst } from "./solution.js";

describe("85 - Cut First", () => {
  test("cutFirst removes first 2 chars", () => {
    assert.strictEqual(cutFirst("abcdef"), "cdef");
    assert.strictEqual(cutFirst("hi"), "");
  });
});
