import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { transformKeys } from "./solution.js";

describe("245 - Transform Keys", () => {
  test("transforms keys recursively", () => {
    const data = { FirstName: "Alice", Address: { StreetName: "Main St" } };
    const res = transformKeys(data, k => k.toLowerCase());
    assert.deepStrictEqual(res, { firstname: "Alice", address: { streetname: "Main St" } });
  });
});
