# 158 — Default Function Parameters

## Concept
Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.

## Syntax
```javascript
export function greetUser(name = "Guest") {
  return `Hello, ${name}!`;
}
```

## Quick Example
```javascript
function discount(price, rate = 0.1) { return price * (1 - rate); }
```

## Task
Export a function `greetUser(name = "Guest")` that returns `` `Hello, ${name}!` ``.

---
**Run Test:** `node --test challenges/158-default-parameters/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/158-default-parameters/solution.test.js`
