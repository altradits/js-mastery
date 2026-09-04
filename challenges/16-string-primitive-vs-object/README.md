# 16 — String Primitives vs String Objects

## Concept
`typeof "foo" === "string"` (primitive), whereas `typeof new String("foo") === "object"`. `obj.valueOf()` extracts the primitive.

## Syntax
```javascript
export function getPrimitiveValue(strObj) {
  return strObj.valueOf();
}
```

## Quick Example
```javascript
const obj = new String("abc");
obj.valueOf(); // "abc" (primitive)
```

## Task
Export a function `getPrimitiveValue(strObj)` that calls `strObj.valueOf()` to return the primitive string.

---
**Run Test:** `node --test challenges/16-string-primitive-vs-object/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/16-string-primitive-vs-object/solution.test.js`
