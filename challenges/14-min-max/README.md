# 14 - Min Max: Comparison Logic with Ternary Operators

## Overview
Comparing two numeric quantities is one of the most fundamental operations in algorithm design.

In this challenge, you will implement `min` and `max` comparison functions using relational operators (`<`, `>`) and the conditional ternary operator (`? :`), **without using `Math.min()` or `Math.max()`**.

---

## Concept Deep-Dive: Relational Operators & Ternaries

### 1. Relational Operators
- **Greater Than (`>`)**: Returns `true` if the left operand is greater than the right operand.
- **Less Than (`<`)**: Returns `true` if the left operand is less than the right operand.

### 2. The Conditional (Ternary) Operator
The ternary operator is an inline conditional expression taking three operands:
```javascript
condition ? valueIfTrue : valueIfFalse
```

Implementation examples:
```javascript
const max = (a, b) => (a > b ? a : b);
const min = (a, b) => (a < b ? a : b);
```

### 3. Equal Arguments
When `a === b`, both `a > b` and `a < b` evaluate to `false`, causing the ternary to return `b` (which is equal to `a`), correctly returning either identical value.

---

## Edge Cases & Gotchas

> [!WARNING]
> - Do **not** use `Math.min()` or `Math.max()` in this exercise!
> - Negative numbers: `-10` is less than `-2` (`-10 < -2` is `true`).
> - Floating point numbers: Precision comparisons such as `0.1` vs `0.2` must be handled cleanly.

---

## Challenge Instructions

In `solution.js`, implement and export:

1. **`max(a, b)`**: Returns the larger of the two numbers `a` and `b`.
2. **`min(a, b)`**: Returns the smaller of the two numbers `a` and `b`.

---

## Progressive Hints

1. **Hint 1**: For `max(a, b)`, test if `a > b`. If yes, return `a`; else return `b`.
2. **Hint 2**: For `min(a, b)`, test if `a < b`. If yes, return `a`; else return `b`.
3. **Hint 3**: Can be written as concise arrow functions.
