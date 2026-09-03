# 15 - Sign: Number Sign Detection & Sign Parity

## Overview
In mathematics, the signum (sign) function $\text{sgn}(x)$ extracts the sign of a real number, returning $1$ for positive numbers, $-1$ for negative numbers, and $0$ for zero.

In this challenge, you will implement the sign function and a parity check `sameSign(a, b)` to determine whether two numbers share the same sign direction.

---

## Concept Deep-Dive: Multi-Way Conditional Branching

### 1. The Signum Function Definition
$$
\text{sign}(n) = \begin{cases} 
1 & \text{if } n > 0 \\
-1 & \text{if } n < 0 \\
0 & \text{if } n = 0 
\end{cases}
$$

### 2. Multi-Branch Implementation
Using standard `if / else if / else` or nested ternaries:
```javascript
function sign(n) {
  if (n > 0) return 1;
  if (n < 0) return -1;
  return 0;
}
```

### 3. Comparing Parity with `sameSign(a, b)`
To check if two numbers share the same sign, compute the sign of both numbers and compare them using strict equality `===`:
```javascript
function sameSign(a, b) {
  return sign(a) === sign(b);
}
```

---

## Edge Cases & Gotchas

> [!NOTE]
> - `sign(0)` returns `0`.
> - If `a = 0` and `b = 5`, `sameSign(0, 5)` must return `false` because `sign(0) !== sign(5)` (`0 !== 1`).
> - If `a = -10` and `b = -50`, `sameSign(-10, -50)` returns `true` because `sign(-10) === sign(-50)` (`-1 === -1`).

---

## Challenge Instructions

In `solution.js`, implement and export:

1. **`sign(n)`**:
   - Returns `1` if `n > 0`.
   - Returns `-1` if `n < 0`.
   - Returns `0` if `n === 0`.
   - *(Do not use `Math.sign()`)*.

2. **`sameSign(a, b)`**:
   - Returns `true` if `a` and `b` have the same sign (both positive, both negative, or both zero).
   - Returns `false` otherwise.

---

## Progressive Hints

1. **Hint 1**: In `sign(n)`, check `n > 0`, `n < 0`, and return `0` as fallback.
2. **Hint 2**: In `sameSign(a, b)`, call `sign(a) === sign(b)`.
3. **Hint 3**: Test with positive, negative, and zero combinations.
