import { test, describe, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { sourceObject, get, set } from "./solution.js";

describe("09 - Change: Dynamic Property Getters & Setters", () => {
  beforeEach(() => {
    // Clear properties before each test
    for (const key of Object.keys(sourceObject)) {
      delete sourceObject[key];
    }
  });

  test("set assigns property and returns the assigned value", () => {
    const result = set("num", 42);
    assert.strictEqual(result, 42);
    assert.strictEqual(sourceObject.num, 42);
  });

  test("get retrieves previously set property", () => {
    set("str", "hello world");
    assert.strictEqual(get("str"), "hello world");
  });

  test("get returns undefined for non-existent keys", () => {
    assert.strictEqual(get("nonExistent"), undefined);
  });

  test("handles dynamic keys with symbols and numbers", () => {
    set("key with spaces", true);
    assert.strictEqual(get("key with spaces"), true);
  });
});
