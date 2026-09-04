# 166 — Getters and Setters

## Concept
`get` defines a getter property and `set` defines a setter method on a class.

## Syntax
```javascript
export class Circle {
  constructor(radius) { this.radius = radius; }
  get diameter() { return this.radius * 2; }
  set diameter(d) { this.radius = d / 2; }
}
```

## Quick Example
```javascript
const c = new Circle(5); c.diameter; // 10
```

## Task
Export a class `Circle` with `constructor(radius)`, getter `get diameter()`, and setter `set diameter(d)`.

---
**Run Test:** `node --test challenges/166-class-getters-setters/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/166-class-getters-setters/solution.test.js`
