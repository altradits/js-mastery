# 168 — Static Methods

## Concept
`static method()` defines a method that belongs to the class itself rather than instances.

## Syntax
```javascript
export class MathHelper {
  static add(a, b) {
    return a + b;
  }
}
```

## Quick Example
```javascript
MathHelper.add(2, 3); // 5
```

## Task
Export a class `MathHelper` with a static method `static add(a, b)` returning `a + b`.

---
**Run Test:** `node --test challenges/168-class-static-methods/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/168-class-static-methods/solution.test.js`
