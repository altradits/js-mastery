# 107 — String.fromCodePoint Static Method

## Concept
`String.fromCodePoint(...codePoints)` returns a string created by using the specified sequence of Unicode code points.

## Syntax
```javascript
export function fromPoints(...points) {
  return String.fromCodePoint(...points);
}
```

## Quick Example
```javascript
String.fromCodePoint(128512); // "😀"
```

## Task
Export a function `fromPoints(...points)` returning `String.fromCodePoint(...points)`.

---
**Run Test:** `node --test challenges/107-string-from-code-point/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/107-string-from-code-point/solution.test.js`
