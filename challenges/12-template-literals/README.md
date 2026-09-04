# 12 — Template Literals & Interpolation

## Concept
Template literals use backticks (`` ` ``) and allow embedding expressions with `${expression}`.

## Syntax
```javascript
export function greet(name) {
  return `Hello, ${name}!`;
}
```

## Quick Example
```javascript
const user = "Alice";
`Welcome, ${user}`; // "Welcome, Alice"
```

## Task
Export a function `greet(name)` that returns the template literal string `"Hello, <name>!"`.

---
**Run Test:** `node --test challenges/12-template-literals/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/12-template-literals/solution.test.js`
