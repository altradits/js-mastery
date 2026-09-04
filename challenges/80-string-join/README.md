# 80 — Joining Arrays into Strings (.join())

## Concept
`arr.join(separator)` combines all elements of an array into a single string separated by `separator`.

## Syntax
```javascript
export function sentence(arr) {
  return arr.join(" ");
}
```

## Quick Example
```javascript
["hello", "world"].join(" "); // "hello world"
```

## Task
Export a function `sentence(arr)` that joins `arr` elements with a space.

---
**Run Test:** `node --test challenges/80-string-join/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/80-string-join/solution.test.js`
