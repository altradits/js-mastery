# 13 - Abs: Absolute Value & Sign Evaluation

## Overview
The absolute value of a real number $x$, denoted $|x|$, is the non-negative value of $x$ without regard to its sign.
For example, $|5| = 5$, $|-5| = 5$, and $|0| = 0$.

In this challenge, you will implement positive sign detection and custom absolute value calculation **from first principles without using the built-in `Math.abs()`**.

---

## Concept Deep-Dive: Absolute Value Logic

### 1. The Mathematical Definition
$$
\text{abs}(x) = \begin{cases} 
x & \text{if } x > 0 \\
0 & \text{if } x = 0 \\
-x & \text{if } x < 0 
\end{cases}
$$

### 2. The Unary Minus Operator (`-x`)
Applying the unary minus operator to a negative number inverts its sign to positive:
```javascript
const n = -42;
console.log(-n); // 42
```

### 3. Conditional Branching (Ternary Operator)
You can express nested conditionals cleanly using the ternary operator `condition ? exprIfTrue : exprIfFalse`:
```javascript
const abs = (num) => (num === 0 ? 0 : num < 0 ? -num : num);
```

---

## Edge Cases & Gotchas

> [!WARNING]
> - Do **not** use `Math.abs()` in your solution!
> - Zero is neither strictly positive nor strictly negative: `isPositive(0)` must return `false`.
> - JavaScript has both `+0` and `-0`. `abs(-0)` must evaluate to `0`.

---

## Challenge Instructions

In `solution.js`, implement and export:

1. **`isPositive(num)`**:
   - Returns `true` if `num > 0`.
   - Returns `false` for zero and negative numbers.

2. **`abs(num)`**:
   - Returns the absolute value of `num` without using `Math.abs()`.

---

## Progressive Hints

1. **Hint 1**: `isPositive(num)` can be written in one line: `return num > 0;`.
2. **Hint 2**: In `abs(num)`, if `num < 0`, return `-num`; otherwise return `num`.
3. **Hint 3**: Ensure `0` returns `0`.
