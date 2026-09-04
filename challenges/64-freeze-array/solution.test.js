import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { arr } from "./solution.js";

describe("64 - Freeze Array", () => {
  test("arr is frozen array", () => {
    assert.ok(Array.isArray(arr));
    assert.ok(Object.isFrozen(arr));
  });
});
