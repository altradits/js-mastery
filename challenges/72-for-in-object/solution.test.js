import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getKeys } from "./solution.js";

describe("72 - For..In Object", () => {
  test("getKeys returns keys", () => {
    assert.deepStrictEqual(getKeys({ a: 1, b: 2 }), ["a", "b"]);
  });
});
