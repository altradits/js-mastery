import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { triangle } from "./solution.js";

describe("203 - Triangle Pattern", () => {
  test("triangle generates correct multiline string", () => {
    assert.strictEqual(triangle("*", 3), "*\n**\n***");
    assert.strictEqual(triangle("#", 1), "#");
  });
});
