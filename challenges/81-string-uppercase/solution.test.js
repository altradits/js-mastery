import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { yell } from "./solution.js";

describe("81 - String Uppercase", () => {
  test("yell converts to uppercase", () => {
    assert.strictEqual(yell("hello"), "HELLO");
  });
});
