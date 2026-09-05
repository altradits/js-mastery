import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { queryBuilder } from "./solution.js";

describe("248 - Fluent Query Builder", () => {
  const users = [
    { id: 1, name: "Alice", age: 30, active: true },
    { id: 2, name: "Bob", age: 22, active: false },
    { id: 3, name: "Charlie", age: 35, active: true },
    { id: 4, name: "David", age: 28, active: true }
  ];

  test("filters data with where clauses", () => {
    const res = queryBuilder(users)
      .where(u => u.active)
      .where(u => u.age >= 30)
      .execute();
    assert.strictEqual(res.length, 2);
    assert.strictEqual(res[0].name, "Alice");
    assert.strictEqual(res[1].name, "Charlie");
  });

  test("selects specified fields only", () => {
    const res = queryBuilder(users)
      .select("id", "name")
      .execute();
    assert.deepStrictEqual(Object.keys(res[0]), ["id", "name"]);
    assert.strictEqual(res[0].age, undefined);
  });

  test("orders data ascending and descending", () => {
    const desc = queryBuilder(users)
      .orderBy("age", "desc")
      .execute();
    assert.strictEqual(desc[0].name, "Charlie");

    const asc = queryBuilder(users)
      .orderBy("age", "asc")
      .limit(2)
      .execute();
    assert.strictEqual(asc.length, 2);
    assert.strictEqual(asc[0].name, "Bob");
  });
});