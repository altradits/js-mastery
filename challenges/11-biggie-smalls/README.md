# 11 - Biggie Smalls: Working with Infinity & Numeric Limits

## Overview
JavaScript represents all standard numbers as 64-bit double-precision floating-point numbers following the **IEEE 754** standard.

When a calculation exceeds the maximum representable finite number (`Number.MAX_VALUE` $\approx 1.79769 \times 10^{308}$), it overflows to **`Infinity`** (or **`-Infinity`** for negative values).

In this challenge, you will explore special numeric boundary values and their arithmetic behaviors.

---

## Concept Deep-Dive: Infinity in JavaScript

### 1. The Global Constants `Infinity` and `-Infinity`
`Infinity` is a property of the global object representing positive mathematical infinity.
```javascript
console.log(Infinity);         // Infinity
console.log(-Infinity);        // -Infinity
console.log(typeof Infinity);  // "number"
```

### 2. How Infinity is Produced
Infinity occurs when:
- Exceeding the maximum number: `Number.MAX_VALUE * 2 === Infinity`
- Dividing a positive non-zero number by zero: `1 / 0 === Infinity`
- Dividing a negative non-zero number by zero: `-1 / 0 === -Infinity`

### 3. Comparing with Infinity
- Any finite number $x$ satisfies: `-Infinity < x < Infinity`.
- `Number.isFinite(value)` can be used to test whether a value is a finite number (`Number.isFinite(Infinity)` is `false`).

---

## Edge Cases & Gotchas

> [!NOTE]
> - `typeof Infinity === 'number'` and `typeof -Infinity === 'number'`.
> - `0 / 0` does not equal `Infinity`; it evaluates to `NaN` (Not a Number).
> - `Infinity + 1 === Infinity` and `Infinity * 2 === Infinity`.

---

## Challenge Instructions

In `solution.js`, declare and export:

1. **`biggie`**: A numeric constant initialized to `Infinity` (or `Number.POSITIVE_INFINITY`).
2. **`smalls`**: A numeric constant initialized to `-Infinity` (or `Number.NEGATIVE_INFINITY`).

---

## Progressive Hints

1. **Hint 1**: You can directly assign `export const biggie = Infinity;`.
2. **Hint 2**: You can directly assign `export const smalls = -Infinity;`.
3. **Hint 3**: Confirm that `biggie > Number.MAX_VALUE` and `smalls < -Number.MAX_VALUE`.
