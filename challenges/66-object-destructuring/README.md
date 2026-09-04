# 66 — Object Destructuring

## Concept
`const { name, age } = obj` unpacks properties from objects into distinct variables.

## Syntax
```javascript
export function getNameAndAge(user) {
  const { name, age } = user;
  return `${name} is ${age}`;
}
```

## Quick Example
```javascript
const { x, y } = { x: 5, y: 10 };
```

## Task
Export a function `getNameAndAge(user)` that destructures `{ name, age }` and returns `` `${name} is ${age}` ``.

---
**Run Test:** `node --test challenges/66-object-destructuring/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/66-object-destructuring/solution.test.js`
