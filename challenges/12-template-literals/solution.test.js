import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { greet } from "./solution.js";

describe("12 - Template Literals", () => {
  test("greet returns interpolated string", () => {
    assert.strictEqual(greet("Alice"), "Hello, Alice!");
    assert.strictEqual(greet("Bob"), "Hello, Bob!");
  });
});
