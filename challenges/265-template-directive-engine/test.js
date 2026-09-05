import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { renderTemplate } from "./solution.js";

describe("265 - Template Directive Engine", () => {
  test("renders variables and nested objects", () => {
    const tpl = "Hello {{user.name}} from {{user.city}}!";
    const res = renderTemplate(tpl, { user: { name: "Alice", city: "Paris" } });
    assert.strictEqual(res, "Hello Alice from Paris!");
  });

  test("handles conditionals and loops", () => {
    const tpl = "{{#if show}}Items:{{#each items}} {{this}}{{/each}}{{/if}}";
    const res = renderTemplate(tpl, { show: true, items: ["A", "B", "C"] });
    assert.strictEqual(res, "Items: A B C");

    const hidden = renderTemplate(tpl, { show: false, items: ["A"] });
    assert.strictEqual(hidden, "");
  });
});