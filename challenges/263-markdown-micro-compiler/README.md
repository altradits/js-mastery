# 263 — Markdown to Semantic HTML Micro-Compiler

## 🎯 Concepts & Mechanics
Text compilers translate markdown formatting tokens (headers, lists, bold, italics, links, and code fences) into valid semantic HTML without external parsers.

## 💻 Syntax Reference
```javascript
export function compileMarkdown(markdown) {
  return htmlString;
}
```

## 🚀 Mission Objective
Export `compileMarkdown(str)` converting `#`, `##`, `**`, `*`, `` ` ``, ```` ``` ````, `[text](url)`, and `- ` into standard HTML tags.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
