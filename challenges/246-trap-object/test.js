import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { trapObject } from "./solution.js";

describe("246 - Trap Object", () => {
  test("traps get and set operations", () => {
    const logs = [];
    const obj = trapObject({ name: "Alice", age: 25 }, (action, key, val, newVal) => {
      logs.push({ action, key, val, newVal });
    });

    const n = obj.name;
    obj.age = 30;

    assert.strictEqual(n, "Alice");
    assert.strictEqual(obj.age, 30);
    assert.strictEqual(logs.length, 3); // get name, set age, get age
    assert.strictEqual(logs[0].action, "get");
    assert.strictEqual(logs[0].key, "name");
  });
});
