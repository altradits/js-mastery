import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { squareRoot } from "./solution.js";

describe("115 - Math Sqrt", () => {
  test("squareRoot returns square root", () => {
    assert.strictEqual(squareRoot(16), 4);
  });
});
