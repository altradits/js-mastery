import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { original, clone2 } from "./solution.js";

describe("57 - Clone Spread", () => {
  test("clone2 is a separate copy using spread syntax", () => {
    assert.notStrictEqual(original, clone2);
    assert.deepStrictEqual(original, clone2);
  });
});
