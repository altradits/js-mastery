# 198 — Index Swapping: kiss

## Concept
Extracts the last and first elements of an array or string and returns them in reversed order as a pair `[last, first]`.

## Syntax
```javascript
export function kiss(arg) {
  return [arg[arg.length - 1], arg[0]];
}
```

## Quick Example
```javascript
kiss([1, 2, 3]); // [3, 1]
kiss("hello"); // ["o", "h"]
```

## Task
Export a function `kiss(arg)` returning `[lastElement, firstElement]`.

---
**Run Test:** `node --test challenges/198-kiss/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/198-kiss/solution.test.js`
