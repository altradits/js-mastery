# 167 — Class Inheritance (extends & super)

## Concept
`class Child extends Parent` inherits properties and methods from a parent class.

## Syntax
```javascript
export class Dog extends Animal {
  speak() { return `${this.name} barks.`; }
}
```

## Quick Example
```javascript
class Dog extends Animal { speak() { return "Bark"; } }
```

## Task
Export `Animal` (with `constructor(name)`) and `Dog` extending `Animal` with `constructor(name, breed)` using `super(name)`.

---
**Run Test:** `node --test challenges/167-class-inheritance/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/167-class-inheritance/solution.test.js`
