import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { hashCode } from "./solution.js";

describe("183 - Hash Code", () => {
  test("hashCode calculates polynomial hash", () => {
    assert.strictEqual(hashCode("hello"), 99162322);
    assert.strictEqual(hashCode(""), 0);
  });
});
