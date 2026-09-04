import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getObjectKeys } from "./solution.js";

describe("140 - Object Keys", () => {
  test("getObjectKeys returns property keys", () => {
    assert.deepStrictEqual(getObjectKeys({ x: 10, y: 20 }), ["x", "y"]);
  });
});
