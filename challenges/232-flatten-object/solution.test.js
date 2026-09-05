import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { flattenObject } from "./solution.js";

describe("232 - Flatten Object", () => {
  test("flattens deep object", () => {
    const input = { a: { b: 1, c: { d: 2 } }, e: 3 };
    assert.deepStrictEqual(flattenObject(input), {
      "a.b": 1,
      "a.c.d": 2,
      "e": 3
    });
  });
});
