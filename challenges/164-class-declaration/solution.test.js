import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { Person } from "./solution.js";

describe("164 - Class Declaration", () => {
  test("Person instantiates with name and age", () => {
    const p = new Person("Alice", 25);
    assert.strictEqual(p.name, "Alice");
    assert.strictEqual(p.age, 25);
  });
});
