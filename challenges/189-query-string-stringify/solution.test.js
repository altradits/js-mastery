import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { stringifyQuery } from "./solution.js";

describe("189 - Query String Serializer", () => {
  test("stringifyQuery serializes object to query string", () => {
    assert.strictEqual(stringifyQuery({ q: "js", page: "2" }), "?q=js&page=2");
    assert.strictEqual(stringifyQuery({}), "");
  });
});
