# 249 — Schema Validator & Payload Sanitizer

## 🎯 Concepts & Mechanics
Enterprise APIs require runtime schema validation and data sanitization combining recursive type checks, regex patterns, required field guards, and value transformations.

## 💻 Syntax Reference
```javascript
export function createSchemaValidator(schema) {
  return {
    validate(data) { /* returns { isValid, errors } */ },
    sanitize(data) { /* returns sanitized object */ }
  };
}
```

## 🚀 Mission Objective
Export `createSchemaValidator(schema)` with `.validate(data)` returning `{ isValid, errors }` and `.sanitize(data)` returning transformed values (e.g. trimmed strings, uppercase, default values).

## 💡 Hint
Export all functions/classes as Named Exports. Every statement must terminate with a semicolon ';'.
