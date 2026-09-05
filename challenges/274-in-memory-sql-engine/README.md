# 274 — In-Memory Relational SQL Query Engine

## 🎯 Concepts & Mechanics
Relational database engines parse and execute structured queries with `SELECT`, `WHERE`, `JOIN` (INNER/LEFT), `GROUP BY`, aggregate functions, and `ORDER BY`.

## 💻 Syntax Reference
```javascript
export function MiniSQL(tables) {
  return {
    from(tableName) { /* ... chainable builder */ }
  };
}
```

## 🚀 Mission Objective
Export `MiniSQL(tables)` supporting `.from()`, `.select()`, `.where()`, `.join(table, onFn, type)`, `.groupBy(key, aggregates)`, and `.execute()`.

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
