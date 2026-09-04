# 62 — Array Mutation: push & pop

## Concept
`arr.push(item)` adds an element to the end; `arr.pop()` removes and returns the last element.

## Syntax
```javascript
export function appendAndPop(arr, item) {
  arr.push(item);
  return arr.pop();
}
```

## Quick Example
```javascript
const a = [1]; a.push(2); a.pop(); // 2
```

## Task
Export a function `appendAndPop(arr, item)` that pushes `item` to `arr` and returns `arr.pop()`.

---
**Run Test:** `node --test challenges/62-array-push-pop/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/62-array-push-pop/solution.test.js`
