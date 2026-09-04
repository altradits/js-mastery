# 164 — Class Declarations

## Concept
`class Name { constructor(...) { ... } }` creates a blueprint for creating objects.

## Syntax
```javascript
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

## Quick Example
```javascript
const p = new Person("Alice", 25);
```

## Task
Export a class named `Person` with a `constructor(name, age)` assigning `this.name` and `this.age`.

---
**Run Test:** `node --test challenges/164-class-declaration/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/164-class-declaration/solution.test.js`
