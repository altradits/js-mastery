# 90 — String Repeat (.repeat())

## Concept
The `str.repeat(count)` method constructs and returns a new string containing `count` copies of `str` concatenated together.

## Syntax
```javascript
export function repeatStr(str, count) {
  return str.repeat(count);
}
```

## Quick Example
```javascript
"abc".repeat(3); // "abcabcabc"
```

## Task
Export a function `repeatStr(str, count)` that returns `str.repeat(count)`.

---
**Run Test:** `node --test challenges/90-string-repeat/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/90-string-repeat/solution.test.js`
