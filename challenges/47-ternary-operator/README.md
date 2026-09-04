# 47 — Conditional (Ternary) Operator (? :)

## Concept
The ternary operator `condition ? ifTrue : ifFalse` returns one of two expressions based on a condition.

## Syntax
```javascript
export function passOrFail(score) {
  return score >= 50 ? "Pass" : "Fail";
}
```

## Quick Example
```javascript
const status = age >= 18 ? "Adult" : "Minor";
```

## Task
Export a function `passOrFail(score)` returning `"Pass"` if `score >= 50`, else `"Fail"`.

---
**Run Test:** `node --test challenges/47-ternary-operator/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/47-ternary-operator/solution.test.js`
