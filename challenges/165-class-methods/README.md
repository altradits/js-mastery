# 165 — Class Instance Methods

## Concept
Methods defined inside a class body are added to its prototype and accessible to all instances.

## Syntax
```javascript
export class Greeter {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}
```

## Quick Example
```javascript
const g = new Greeter("Bob");
g.greet(); // "Hello, Bob!"
```

## Task
Export a class `Greeter` with `constructor(name)` and a method `greet()` returning `` `Hello, ${this.name}!` ``.

---
**Run Test:** `node --test challenges/165-class-methods/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/165-class-methods/solution.test.js`
