# 135 — Array Inclusion Check (.includes())

## Concept
`arr.includes(value)` determines whether an array includes a certain value among its entries.

## Syntax
```javascript
export function containsItem(arr, item) {
  return arr.includes(item);
}
```

## Quick Example
```javascript
[1, 2, 3].includes(2); // true
```

## Task
Export a function `containsItem(arr, item)` returning `arr.includes(item)`.

---
**Run Test:** `node --test challenges/135-array-includes/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/135-array-includes/solution.test.js`
