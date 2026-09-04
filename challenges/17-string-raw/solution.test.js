import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getRawPath } from "./solution.js";

describe("17 - String.raw", () => {
  test("getRawPath returns unescaped raw string", () => {
    assert.strictEqual(getRawPath(), "C:\\Windows\\System32");
  });
});
