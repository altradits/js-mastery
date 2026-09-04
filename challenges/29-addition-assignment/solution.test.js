import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { addAssign } from "./solution.js";

describe("29 - Addition Assignment", () => {
  test("addAssign updates total with +=", () => {
    assert.strictEqual(addAssign(10, 5), 15);
  });
});
