import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sentence } from "./solution.js";

describe("80 - String Join", () => {
  test("sentence joins array into string", () => {
    assert.strictEqual(sentence(["hello", "world"]), "hello world");
  });
});
