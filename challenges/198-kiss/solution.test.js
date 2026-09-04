import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { kiss } from "./solution.js";

describe("198 - Kiss", () => {
  test("kiss returns [last, first]", () => {
    assert.deepStrictEqual(kiss([1, 2, 3]), [3, 1]);
    assert.deepStrictEqual(kiss("hello"), ["o", "h"]);
  });
});
