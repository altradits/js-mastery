import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { appendAndPop } from "./solution.js";

describe("62 - Array Push & Pop", () => {
  test("appendAndPop pushes and pops", () => {
    const sample = [1, 2];
    assert.strictEqual(appendAndPop(sample, 3), 3);
  });
});
