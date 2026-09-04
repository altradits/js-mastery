import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { undef } from "./solution.js";

describe("09 - Primitive Undefined", () => {
  test("undef is undefined", () => {
    assert.strictEqual(undef, undefined);
  });
});
