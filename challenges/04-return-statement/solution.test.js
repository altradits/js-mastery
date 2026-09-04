import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getMessage } from "./solution.js";

describe("04 - Return Statement", () => {
  test("getMessage returns 'Hello World'", () => {
    assert.strictEqual(typeof getMessage, "function");
    assert.strictEqual(getMessage(), "Hello World");
  });
});
