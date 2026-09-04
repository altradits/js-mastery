import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { greetUser } from "./solution.js";

describe("158 - Default Parameters", () => {
  test("greetUser defaults to Guest", () => {
    assert.strictEqual(greetUser("Alice"), "Hello, Alice!");
    assert.strictEqual(greetUser(), "Hello, Guest!");
  });
});
