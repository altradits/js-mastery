import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { jsonDiff, applyPatch } from "./solution.js";

describe("270 - JSON Patch Diff Engine", () => {
  test("generates atomic patch operations and applies them", () => {
    const src = { name: "Alice", age: 30, skills: ["js"] };
    const target = { name: "Alice", age: 31, city: "Paris", skills: ["js", "esm"] };

    const patch = jsonDiff(src, target);
    const patched = applyPatch(src, patch);

    assert.deepStrictEqual(patched, target);
  });
});