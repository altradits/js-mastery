import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { Greeter } from "./solution.js";

describe("165 - Class Methods", () => {
  test("Greeter has greet method", () => {
    const g = new Greeter("Bob");
    assert.strictEqual(g.greet(), "Hello, Bob!");
  });
});
