# 15 — String at Method (.at())

## Concept
`str.at(index)` returns the character at `index`, allowing negative integers to count back from the end (`str.at(-1)`).

## Syntax
```javascript
export function getAt(str, index) {
  return str.at(index);
}
```

## Quick Example
```javascript
"hello".at(-1); // "o"
```

## Task
Export a function `getAt(str, index)` returning `str.at(index)`.

---
**Run Test:** `node --test challenges/15-string-at-method/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/15-string-at-method/solution.test.js`
