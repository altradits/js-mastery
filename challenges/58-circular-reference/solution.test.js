import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { circular } from "./solution.js";

describe("58 - Circular Reference", () => {
  test("circular references itself", () => {
    assert.strictEqual(circular.circular, circular);
  });
});
