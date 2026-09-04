import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getObjectValues } from "./solution.js";

describe("141 - Object Values", () => {
  test("getObjectValues returns property values", () => {
    assert.deepStrictEqual(getObjectValues({ x: 10, y: 20 }), [10, 20]);
  });
});
