# 194 — Project Utility: HTML Element Generator

## Concept
Generates HTML tag strings with attributes and nested text content: `<tag attr="val">content</tag>`.

## Syntax
```javascript
export function tag(name, attrs = {}, content = "") {
  const attrStr = Object.entries(attrs).map(([k, v]) => ` ${k}="${v}"`).join("");
  return `<${name}${attrStr}>${content}</${name}>`;
}
```

## Quick Example
```javascript
tag("button", { id: "btn", class: "primary" }, "Click"); // '<button id="btn" class="primary">Click</button>'
```

## Task
Export a function `tag(name, attrs = {}, content = "")` that returns an HTML tag string.

---
**Run Test:** `node --test challenges/194-html-builder/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/194-html-builder/solution.test.js`
