import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getPrimitiveValue } from "./solution.js";

describe("16 - Primitive vs Object", () => {
  test("getPrimitiveValue returns primitive string from String object", () => {
    const strObj = new String("test");
    const res = getPrimitiveValue(strObj);
    assert.strictEqual(typeof res, "string");
    assert.strictEqual(res, "test");
  });
});
