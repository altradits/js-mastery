# 05 - More or Less: Basic Arithmetic & Pure Functions

## Overview
Functions are the primary building blocks of reusable logic in JavaScript. A **Pure Function** is a function that:
1. Given the same inputs, always returns the same output.
2. Produces **no observable side effects** (it does not modify external variables, log to consoles, or mutate arguments).

In this challenge, you will implement four fundamental pure arithmetic functions.

---

## Concept Deep-Dive: Function Syntax & Arithmetic Operators

### 1. Function Syntax Options
In JavaScript, you can define functions in multiple ways:

```javascript
// Function Declaration
function add(a, b) {
  return a + b;
}

// Arrow Function (concise body with implicit return)
const add = (a, b) => a + b;
```

### 2. Parameters vs Arguments
- **Parameters**: The named variable placeholders in the function definition (e.g. `a`, `b`).
- **Arguments**: The actual concrete values passed when calling the function (e.g. `add(5, 3)`).

### 3. Arithmetic Operators
- Addition: `a + b`
- Subtraction: `a - b`
- Incrementing: `n + 1` (purely computes the next number without reassigning `n`)
- Decrementing: `n - 1` (purely computes the previous number)

---

## Edge Cases & Gotchas

> [!NOTE]
> - `n++` vs `n + 1`: `n++` modifies `n` in place. In pure functions, prefer `n + 1` because it returns the incremented result cleanly without mutating the parameter.
> - Floating point numbers: Numbers like `-5`, `0`, and `3.5` should all work consistently.

---

## Challenge Instructions

In `solution.js`, implement and export the four arithmetic functions:

1. **`more(n)`**: Takes a number `n` and returns `n + 1`.
2. **`less(n)`**: Takes a number `n` and returns `n - 1`.
3. **`add(a, b)`**: Takes two numbers `a` and `b` and returns their sum `a + b`.
4. **`sub(a, b)`**: Takes two numbers `a` and `b` and returns the difference `a - b`.

---

## Progressive Hints

1. **Hint 1**: You can use either traditional `function name(params) { return ...; }` or arrow functions `export const name = (params) => ...;`.
2. **Hint 2**: Remember that `sub(a, b)` must subtract `b` from `a` (`a - b`).
3. **Hint 3**: All functions must return a number.
