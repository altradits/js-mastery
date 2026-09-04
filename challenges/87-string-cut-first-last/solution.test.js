import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { cutFirstLast } from "./solution.js";

describe("87 - Cut First Last", () => {
  test("cutFirstLast removes first and last 2 chars", () => {
    assert.strictEqual(cutFirstLast("abcdefgh"), "cdef");
  });
});
