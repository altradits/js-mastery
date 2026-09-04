import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getNameAndAge } from "./solution.js";

describe("66 - Object Destructuring", () => {
  test("getNameAndAge destructures properties", () => {
    assert.strictEqual(getNameAndAge({ name: "Alice", age: 25 }), "Alice is 25");
  });
});
