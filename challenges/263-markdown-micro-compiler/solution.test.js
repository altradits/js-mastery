import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { compileMarkdown } from "./solution.js";

describe("263 - Markdown Micro Compiler", () => {
  test("compiles headings, bold, italic, and links", () => {
    const md = "# Title\nWelcome to **JavaScript** with *speed*. See [docs](https://js.org).";
    const html = compileMarkdown(md);
    assert.strictEqual(html.includes("<h1>Title</h1>"), true);
    assert.strictEqual(html.includes("<strong>JavaScript</strong>"), true);
    assert.strictEqual(html.includes("<em>speed</em>"), true);
    assert.strictEqual(html.includes('<a href="https://js.org">docs</a>'), true);
  });

  test("compiles lists and code blocks", () => {
    const md = "- Item 1\n- Item 2\n```js\nconst a = 1;\n```";
    const html = compileMarkdown(md);
    assert.strictEqual(html.includes("<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n</ul>"), true);
    assert.strictEqual(html.includes('<pre><code class="lang-js">const a = 1;</code></pre>'), true);
  });
});