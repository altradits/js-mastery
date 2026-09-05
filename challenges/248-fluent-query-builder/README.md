# 248 — Fluent Data Query Builder

## 🎯 Concepts & Mechanics
Method chaining and query builders allow declarative data transformations by combining filter predicates, column selections, sort orders, and limits into a single reusable execution pipeline.

## 💻 Syntax Reference
```javascript
export function queryBuilder(data) {
  return {
    where(predicate) { /* ... */ return this; },
    select(...fields) { /* ... */ return this; },
    orderBy(key, dir = 'asc') { /* ... */ return this; },
    limit(count) { /* ... */ return this; },
    execute() { /* ... */ }
  };
}
```

## 🚀 Mission Objective
Export a function `queryBuilder(data)` supporting chainable `.where()`, `.select()`, `.orderBy()`, `.limit()`, and `.execute()` methods without mutating the input dataset.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
