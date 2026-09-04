# 17 — String.raw Static Method

## Concept
`String.raw` template tag returns raw string form of template literals without processing escape sequences.

## Syntax
```javascript
export function getRawPath() {
  return String.raw`C:\Windows\System32`;
}
```

## Quick Example
```javascript
String.raw`Hello\nWorld`; // "Hello\\nWorld"
```

## Task
Export a function `getRawPath()` returning `String.raw\`C:\Windows\System32\`.

---
**Run Test:** `node --test challenges/17-string-raw/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/17-string-raw/solution.test.js`
