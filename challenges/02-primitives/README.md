# 02 - Primitives: Fundamental Primitive Types in JavaScript

## Overview
JavaScript values are divided into two primary categories: **Primitives** and **Objects** (Reference types).
Primitives are the simplest, indivisible building blocks of data in the language. They are immutable (cannot be altered once created) and are compared by value rather than by reference.

In this challenge, you will explore JavaScript's core primitive types and how runtime type reflection works using the `typeof` operator.

---

## Concept Deep-Dive: JavaScript's 7 Primitive Types

JavaScript defines 7 primitive types:
1. **String**: Textual sequences (e.g., `"Hello"`, `'JS'`).
2. **Number**: 64-bit floating-point numbers (both integers like `42` and decimals like `3.14`).
3. **Boolean**: Logical values representing `true` or `false`.
4. **Undefined**: The default value of an unassigned variable (`undefined`).
5. **Null**: Intentional absence of any object value (`null`).
6. **Symbol**: Unique, immutable identifier introduced in ES6 (`Symbol('id')`).
7. **BigInt**: Arbitrary precision integers for numbers beyond $2^{53} - 1$ (e.g., `9007199254740991n`).

```
                ┌──────────────────────────────────────────────────────────┐
                │                  JavaScript Data Types                   │
                └─────────────────────────────┬────────────────────────────┘
                                              │
                    ┌─────────────────────────┴─────────────────────────┐
                    │                                                   │
         ┌──────────▼──────────┐                             ┌──────────▼──────────┐
         │     Primitives      │                             │   Objects / Arrays  │
         │ (Stored by value)   │                             │(Stored by reference)│
         └──────────┬──────────┘                             └─────────────────────┘
                    │
   ├── String    ("JavaScript")
   ├── Number    (42, 3.14)
   ├── Boolean   (true, false)
   ├── Undefined (undefined)
   ├── Null      (null)
   ├── Symbol    (Symbol())
   └── BigInt    (100n)
```

### The `typeof` Operator
The `typeof` operator returns a string indicating the type of the unevaluated operand:
```javascript
typeof "hello"     // => "string"
typeof 42          // => "number"
typeof true        // => "boolean"
typeof undefined   // => "undefined"
```

### Stack vs Heap: Memory Storage
- **Primitives** are stored directly on the **Call Stack** because their size is fixed and known at compile time.
- When you assign a primitive to another variable:
  ```javascript
  let a = 10;
  let b = a; // A copy of the value 10 is created on the stack
  b = 20;    // Changing b does NOT affect a (a is still 10)
  ```

---

## Edge Cases & Gotchas

> [!WARNING]
> - `typeof null === 'object'`: This is a famous, historic bug from the first version of JavaScript in 1995 that cannot be fixed without breaking backwards compatibility across the web.
> - `typeof NaN === 'number'`: `NaN` stands for "Not a Number", but in IEEE 754 floating point standard, it is categorized as a special numeric value.

---

## Challenge Instructions

In `solution.js`, declare and export the four fundamental primitive constants:

1. **`str`**: A constant holding any non-empty string (e.g. `"JavaScript"`).
2. **`num`**: A constant holding any valid number (e.g. `2` or `42`).
3. **`bool`**: A constant holding a boolean (`true` or `false`).
4. **`undef`**: A constant holding the value `undefined`.

---

## Progressive Hints

1. **Hint 1**: Use `export const <name> = <value>;` for each variable.
2. **Hint 2**: To export `undef`, you can explicitly write `export const undef = undefined;`.
3. **Hint 3**: Ensure that `typeof str === 'string'`, `typeof num === 'number'`, `typeof bool === 'boolean'`, and `typeof undef === 'undefined'`.
