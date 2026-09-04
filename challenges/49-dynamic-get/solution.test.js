import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { get } from "./solution.js";

describe("49 - Dynamic Get", () => {
  test("get retrieves property dynamically", () => {
    assert.strictEqual(get({ title: "Master" }, "title"), "Master");
  });
});
