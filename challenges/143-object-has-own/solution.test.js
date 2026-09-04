import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { hasOwnProperty } from "./solution.js";

describe("143 - Object hasOwn", () => {
  test("hasOwnProperty checks own property presence", () => {
    assert.strictEqual(hasOwnProperty({ a: 1 }, "a"), true);
  });
});
