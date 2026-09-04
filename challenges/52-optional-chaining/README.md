# 52 — Optional Chaining (?.)

## Concept
`obj?.prop?.nested` returns `undefined` instead of throwing a TypeError if an intermediate property is nullish.

## Syntax
```javascript
export function getCity(user) {
  return user?.address?.city;
}
```

## Quick Example
```javascript
const person = {};
person?.address?.city; // undefined
```

## Task
Export a function `getCity(user)` returning `user?.address?.city` using optional chaining.

---
**Run Test:** `node --test challenges/52-optional-chaining/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/52-optional-chaining/solution.test.js`
