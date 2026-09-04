import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { person, samePerson } from "./solution.js";

describe("53 - Object Reference", () => {
  test("person and samePerson are strictly identical references", () => {
    assert.strictEqual(person, samePerson);
    assert.strictEqual(person.age, 30);
  });
});
