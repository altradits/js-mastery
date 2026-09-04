# 01 — Constant Variable & Export

## Concept
A variable stores data. In JavaScript, `const` creates a variable whose value cannot be reassigned. The `export` keyword makes it accessible to tests and other files.

## Syntax
```javascript
export const variableName = "value";
```

## Quick Example
```javascript
// Storing and exporting a string
export const language = "JavaScript";
```

## Task
Export a constant named `message` with the exact string value `"Hello World"`.

---
**Run Test:** `node --test challenges/01-constant-variable/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/01-constant-variable/solution.test.js`
