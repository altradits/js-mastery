# 43 — Double NOT (!!) for Truthiness

## Concept
Double NOT `!!val` or `Boolean(val)` converts any value explicitly into its boolean equivalent.

## Syntax
```javascript
export function toBool(val) {
  return !!val;
}
```

## Quick Example
```javascript
!!"hello"; // true
!!null; // false
```

## Task
Export a function `toBool(val)` that returns `!!val`.

---
**Run Test:** `node --test challenges/43-double-not/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/43-double-not/solution.test.js`
