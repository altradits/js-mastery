import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { str, num, bool, undef } from "./solution.js";

describe("02 - Primitives: Fundamental Primitive Types", () => {
  test("str is a string primitive", () => {
    assert.strictEqual(typeof str, "string");
    assert.ok(str.length > 0, "str should be a non-empty string");
  });

  test("num is a number primitive", () => {
    assert.strictEqual(typeof num, "number");
    assert.ok(!Number.isNaN(num), "num should be a valid number, not NaN");
  });

  test("bool is a boolean primitive", () => {
    assert.strictEqual(typeof bool, "boolean");
  });

  test("undef is undefined", () => {
    assert.strictEqual(typeof undef, "undefined");
    assert.strictEqual(undef, undefined);
  });
});
