import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { tag } from "./solution.js";

describe("194 - HTML Builder", () => {
  test("tag generates HTML string", () => {
    assert.strictEqual(tag("h1", { class: "title" }, "Hello"), '<h1 class="title">Hello</h1>');
    assert.strictEqual(tag("div"), '<div></div>');
  });
});
