import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { str } from "./solution.js";

describe("06 - Primitive String", () => {
  test("str is a string", () => {
    assert.strictEqual(typeof str, "string");
    assert.ok(str.length > 0);
  });
});
