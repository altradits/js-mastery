# 53 — Object References in Memory

## Concept
Variables holding objects store a reference to the memory address, not a copy.

## Syntax
```javascript
export const person = { age: 30 };
export const samePerson = person;
```

## Quick Example
```javascript
const original = { x: 1 };
const alias = original;
```

## Task
Export `person = { age: 30 }` and `samePerson = person` so both point to the exact same reference.

---
**Run Test:** `node --test challenges/53-object-reference/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/53-object-reference/solution.test.js`
