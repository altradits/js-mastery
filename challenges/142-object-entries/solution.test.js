import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getObjectEntries } from "./solution.js";

describe("142 - Object Entries", () => {
  test("getObjectEntries returns entries pairs", () => {
    assert.deepStrictEqual(getObjectEntries({ a: 1 }), [["a", 1]]);
  });
});
