import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { Animal, Dog } from "./solution.js";

describe("167 - Class Inheritance", () => {
  test("Dog inherits from Animal", () => {
    const d = new Dog("Buddy", "Golden");
    assert.strictEqual(d.name, "Buddy");
  });
});
