import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { is } from "./solution.js";

describe("215 - Is Namespace", () => {
  test("is object correctly checks types", () => {
    assert.strictEqual(is.num(42), true);
    assert.strictEqual(is.str("hi"), true);
    assert.strictEqual(is.bool(true), true);
    assert.strictEqual(is.arr([]), true);
    assert.strictEqual(is.obj({}), true);
    assert.strictEqual(is.fun(() => {}), true);
    assert.strictEqual(is.truthy(1), true);
    assert.strictEqual(is.falsy(0), true);
  });
});
