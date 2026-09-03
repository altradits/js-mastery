import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { person, clone1, clone2, samePerson } from "./solution.js";

describe("04 - Mutability: Object References & Cloning", () => {
  test("person is mutated properly", () => {
    assert.strictEqual(person.name, "Rick");
    assert.strictEqual(person.age, 78);
    assert.strictEqual(person.country, "FR");
  });

  test("samePerson references the exact same object in memory", () => {
    assert.strictEqual(samePerson, person);
    assert.strictEqual(samePerson.age, 78);
    assert.strictEqual(samePerson.country, "FR");
  });

  test("clone1 is an independent copy retaining original values", () => {
    assert.notStrictEqual(clone1, person);
    assert.deepStrictEqual(clone1, {
      name: "Rick",
      age: 77,
      country: "US",
    });
  });

  test("clone2 is an independent copy retaining original values", () => {
    assert.notStrictEqual(clone2, person);
    assert.deepStrictEqual(clone2, {
      name: "Rick",
      age: 77,
      country: "US",
    });
  });
});
