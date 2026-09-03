# 16 - Is: Custom Runtime Type-Checking Utility Library

## Overview
JavaScript's native type reflection has well-known historical quirks (e.g. `typeof null === 'object'`, `typeof NaN === 'number'`, arrays evaluating to `'object'`).

In professional software development, engineering teams often build custom predicate libraries (such as Lodash or Ramda) to perform clean, declarative type checks.

In this challenge, you will construct an `is` utility library with 11 distinct predicate methods attached to a single namespace object.

---

## Concept Deep-Dive: JavaScript Type Checking Mechanics

### 1. The `typeof` Quirks
- `typeof NaN === 'number'`: Because `NaN` is technically a IEEE 754 numeric value, `typeof` reports `'number'`. To detect `NaN` uniquely, use `Number.isNaN(n)` (which returns `true` only for actual `NaN`, unlike global `isNaN()` which performs aggressive type coercion).
- `Array.isArray(val)`: Introduced in ES5 to distinguish true Arrays from plain Objects.
- `typeof null === 'object'`: `null` is a primitive, but due to a legacy 1995 V8/SpiderMonkey type tag implementation, `typeof null` returns `'object'`.

### 2. Truthiness vs Falsiness
In JavaScript, values evaluate to `true` or `false` when cast into a boolean context.
The **8 Falsy Values** in JavaScript are:
1. `false`
2. `0`, `-0`, `0n`
3. `""` (empty string)
4. `null`
5. `undefined`
6. `NaN`

**All other values are truthy** (including `[]`, `{}`, and `"0"`).

---

## Challenge Instructions

In `solution.js`, export an object `is` with the following 11 predicate methods:

| Method | Signature | Logic & Expected Behavior |
|---|---|---|
| `is.num` | `(n) => boolean` | Returns `true` if `typeof n === 'number'` (including `NaN` and `Infinity`). |
| `is.nan` | `(n) => boolean` | Returns `true` strictly if `Number.isNaN(n)` is true. |
| `is.str` | `(s) => boolean` | Returns `true` if `typeof s === 'string'`. |
| `is.bool` | `(b) => boolean` | Returns `true` if `typeof b === 'boolean'`. |
| `is.undef` | `(u) => boolean` | Returns `true` if `u === undefined`. |
| `is.def` | `(d) => boolean` | Returns `true` if `d !== undefined`. |
| `is.arr` | `(a) => boolean` | Returns `true` if `Array.isArray(a)`. |
| `is.obj` | `(o) => boolean` | Returns `true` if `typeof o === 'object' && !Array.isArray(o)`. |
| `is.fun` | `(f) => boolean` | Returns `true` if `typeof f === 'function'`. |
| `is.truthy` | `(t) => boolean` | Returns `true` if `Boolean(t)` is truthy. |
| `is.falsy` | `(fl) => boolean` | Returns `true` if `!fl` is falsy. |

---

## Progressive Hints

1. **Hint 1**: Initialize `export const is = {};`.
2. **Hint 2**: Attach each method directly to `is`: `is.num = (n) => typeof n === 'number';`.
3. **Hint 3**: For `is.nan`, use `Number.isNaN(n)`.
4. **Hint 4**: For `is.obj`, check `typeof o === 'object' && !Array.isArray(o)`.
