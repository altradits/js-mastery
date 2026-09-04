import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { pipe } from "./solution.js";

describe("163 - Function Composition", () => {
  test("pipe composes two functions in order", () => {
    const fn = pipe(x => x + 2, x => x * 3);
    assert.strictEqual(fn(5), 21); // (5 + 2) * 3 = 21
  });
});
