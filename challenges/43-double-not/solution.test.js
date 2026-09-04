import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { toBool } from "./solution.js";

describe("43 - Double NOT", () => {
  test("toBool converts to boolean", () => {
    assert.strictEqual(toBool("hello"), true);
    assert.strictEqual(toBool(""), false);
  });
});
