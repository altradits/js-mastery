import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { original, clone1 } from "./solution.js";

describe("56 - Clone Assign", () => {
  test("clone1 is a distinct copy with identical properties", () => {
    assert.notStrictEqual(original, clone1);
    assert.deepStrictEqual(original, clone1);
  });
});
