# 169 — Error Handling with try..catch

## Concept
`try { ... } catch (err) { ... }` handles runtime exceptions without crashing the program.

## Syntax
```javascript
export function safeJsonParse(str, fallbackVal) {
  try {
    return JSON.parse(str);
  } catch {
    return fallbackVal;
  }
}
```

## Quick Example
```javascript
safeJsonParse("invalid", {}); // {}
```

## Task
Export a function `safeJsonParse(str, fallbackVal)` that parses JSON inside `try..catch` and returns `fallbackVal` on parse error.

---
**Run Test:** `node --test challenges/169-try-catch/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/169-try-catch/solution.test.js`
