import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { MiniSQL } from "./solution.js";

describe("274 - In-Memory SQL Engine", () => {
  const db = {
    users: [
      { id: 1, name: "Alice", role: "Dev" },
      { id: 2, name: "Bob", role: "Dev" },
      { id: 3, name: "Charlie", role: "QA" }
    ],
    orders: [
      { id: 101, userId: 1, amount: 50 },
      { id: 102, userId: 1, amount: 150 },
      { id: 103, userId: 2, amount: 80 }
    ]
  };

  test("executes inner join, where and aggregation", () => {
    const sql = MiniSQL(db);
    const res = sql.from("users")
      .join("orders", (u, o) => u.id === o.userId)
      .groupBy("name", {
        totalSpent: rows => rows.reduce((acc, r) => acc + r.amount, 0),
        orderCount: rows => rows.length
      })
      .orderBy("totalSpent", "DESC")
      .execute();

    assert.strictEqual(res.length, 2);
    assert.strictEqual(res[0].name, "Alice");
    assert.strictEqual(res[0].totalSpent, 200);
    assert.strictEqual(res[1].name, "Bob");
    assert.strictEqual(res[1].totalSpent, 80);
  });
});