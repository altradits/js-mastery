# 18 — String Concatenation (+ and .concat())

## Concept
`str1.concat(str2)` or `str1 + str2` combines multiple strings into a single new string.

## Syntax
```javascript
export function joinWords(a, b) {
  return a.concat(" ", b);
}
```

## Quick Example
```javascript
"Hello".concat(" ", "World"); // "Hello World"
```

## Task
Export a function `joinWords(a, b)` that joins `a` and `b` separated by a space using `.concat()` or `+`.

---
**Run Test:** `node --test challenges/18-string-concat/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/18-string-concat/solution.test.js`
