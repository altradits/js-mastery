# 163 — Function Composition (pipe)

## Concept
Composition passes the output of one function as the input to the next: `pipe(f, g)(x) = g(f(x))`.

## Syntax
```javascript
export function pipe(f, g) {
  return function(x) {
    return g(f(x));
  };
}
```

## Quick Example
```javascript
const doubleThenAddOne = pipe(x => x * 2, x => x + 1);
```

## Task
Export a function `pipe(f, g)` returning a function `x => g(f(x))`.

---
**Run Test:** `node --test challenges/163-function-composition/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/163-function-composition/solution.test.js`
