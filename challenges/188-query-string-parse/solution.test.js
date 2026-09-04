import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { parseQuery } from "./solution.js";

describe("188 - Query String Parser", () => {
  test("parseQuery parses query strings into object", () => {
    assert.deepStrictEqual(parseQuery("?user=mac&tab=code"), { user: "mac", tab: "code" });
    assert.deepStrictEqual(parseQuery(""), {});
  });
});
