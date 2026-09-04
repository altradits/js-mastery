# 204 — Layout Algorithms: Pyramid Pattern

## Concept
Generates a centered multiline pyramid pattern with dynamic space padding and odd character counts `(2 * r - 1)`.

## Syntax
```javascript
export function pyramid(str, height) {
  const lines = [];
  for (let r = 1; r <= height; r++) {
    const pad = ' '.repeat((height - r) * str.length);
    lines.push(pad + str.repeat(2 * r - 1));
  }
  return lines.join('\n');
}
```

## Quick Example
```javascript
pyramid("*", 2); // " *\n***"
```

## Task
Export a function `pyramid(str, height)` returning a centered pyramid pattern string.

---
**Run Test:** `node --test challenges/204-pyramid/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/204-pyramid/solution.test.js`
