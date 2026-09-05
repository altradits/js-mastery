import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { swappableObject } from "./solution.js";

describe("244 - Swappable Object", () => {
  test("supports bi-directional lookup via Proxy", () => {
    const obj = swappableObject({ a: "apple", b: "banana" });
    assert.strictEqual(obj.a, "apple");
    assert.strictEqual(obj.apple, "a");
    assert.strictEqual(obj.b, "banana");
    assert.strictEqual(obj.banana, "b");
  });
});
