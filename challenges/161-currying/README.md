# 161 — Currying Functions

## Concept
Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument: `a => b => a + b`.

## Syntax
```javascript
export function curryAdd(a) {
  return function(b) {
    return a + b;
  };
}
```

## Quick Example
```javascript
const add5 = curryAdd(5);
add5(10); // 15
```

## Task
Export a curried function `curryAdd(a)` returning `b => a + b`.

---
**Run Test:** `node --test challenges/161-currying/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/161-currying/solution.test.js`
