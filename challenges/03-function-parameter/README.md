# 03 — Function Parameter

## Concept
Functions can accept inputs called **parameters** inside the parentheses `(param)`. When the function runs, the parameter holds the value passed to it.

## Syntax
```javascript
export function functionName(parameterName) {
  console.log(parameterName);
}
```

## Quick Example
```javascript
export function showText(text) {
  console.log(text);
}
```

## Task
Export a function named `logMessage` that takes a parameter `msg` and calls `console.log(msg)`.

---
**Run Test:** `node --test challenges/03-function-parameter/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/03-function-parameter/solution.test.js`
