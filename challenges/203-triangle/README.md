# 203 — Nested Loops: Triangle Pattern

## Concept
Generates a multiline triangle pattern of height `h` using nested loops.

## Syntax
```javascript
export function triangle(str, height) {
  const lines = [];
  for (let r = 1; r <= height; r++) lines.push(str.repeat(r));
  return lines.join('\n');
}
```

## Quick Example
```javascript
triangle("*", 3); // "*\n**\n***"
```

## Task
Export a function `triangle(str, height)` returning newline-separated triangle pattern.

---
**Run Test:** `node --test challenges/203-triangle/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/203-triangle/solution.test.js`
