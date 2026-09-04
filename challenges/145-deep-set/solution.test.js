import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { deepSet } from "./solution.js";

describe("145 - Deep Set", () => {
  test("deepSet creates nested objects and assigns value", () => {
    const target = {};
    deepSet(target, "a.b.c", 42);
    assert.strictEqual(target.a.b.c, 42);
  });
});
