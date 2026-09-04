# 193 — Project Utility: Schema Validator

## Concept
Validates an object against a schema of predicate validator functions returning boolean `isValid` and `errors` array.

## Syntax
```javascript
export function validate(data, schema) {
  const errors = [];
  for (const [key, validator] of Object.entries(schema)) {
    if (!validator(data[key])) errors.push(`Invalid field: ${key}`);
  }
  return { isValid: errors.length === 0, errors };
}
```

## Quick Example
```javascript
validate({ age: 20 }, { age: n => n >= 18 });
```

## Task
Export a function `validate(data, schema)` returning `{ isValid, errors }`.

---
**Run Test:** `node --test challenges/193-data-validator/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/193-data-validator/solution.test.js`
