import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { h, diff } from "./solution.js";

describe("275 - Virtual DOM Reconciler", () => {
  test("creates VNode representations", () => {
    const vnode = h("div", { id: "app" }, h("span", null, "Hello"));
    assert.strictEqual(vnode.tag, "div");
    assert.strictEqual(vnode.props.id, "app");
    assert.strictEqual(vnode.children[0].tag, "span");
  });

  test("calculates tree diff patches accurately", () => {
    const v1 = h("div", { class: "box" }, "Item 1");
    const v2 = h("div", { class: "active" }, "Item 2");
    const patch = diff(v1, v2);

    assert.strictEqual(patch.type, "UPDATE");
    assert.strictEqual(patch.props.class, "active");
    assert.strictEqual(patch.children[0].type, "REPLACE");
  });
});