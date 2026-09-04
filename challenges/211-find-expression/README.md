# 211 — Backtracking Search: findExpression

## Concept
Recursively searches for an arithmetic expression starting from 1 to reach `target` using only `+4` and `*2`.

## Syntax
```javascript
export function findExpression(target) {
  function search(curr, expr) {
    if (curr === target) return expr;
    if (curr > target) return undefined;
    return search(curr + 4, expr + ' +4') || search(curr * 2, expr + ' *2');
  }
  return search(1, '1');
}
```

## Quick Example
```javascript
findExpression(8); // "1 *2 *2 *2" or "1 +4 ... (valid sequence)"
```

## Task
Export a function `findExpression(target)` returning sequence string from 1 to target or `undefined`.

---
**Run Test:** `node --test challenges/211-find-expression/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/211-find-expression/solution.test.js`
