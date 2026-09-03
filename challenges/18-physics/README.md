# 18 - Physics: Parameter Bags & Dynamic Formula Selection

## Overview
In JavaScript API design, functions often accept a single "parameter bag" (or options object) containing varying combinations of properties.

In classical mechanics, acceleration $a$ can be computed using several different kinematic formulas depending on which physical parameters are available.

In this challenge, you will implement `getAcceleration(obj)` to dynamically select and evaluate the correct formula based on the properties present in an object.

---

## Concept Deep-Dive: Options Objects & Falsy Zero Gotcha

### 1. Acceleration Formulas
1. **Newton's Second Law**:
   $$a = \frac{f}{m} \quad (\text{Force } f \text{ and Mass } m)$$
2. **Velocity Change Over Time**:
   $$a = \frac{\Delta v}{\Delta t} \quad (\text{Velocity change } \Delta v \text{ and Time interval } \Delta t)$$
3. **Displacement and Time** (starting from rest):
   $$a = \frac{2d}{t^2} \quad (\text{Distance } d \text{ and Time } t)$$

### 2. The Falsy Zero Hazard
In JavaScript, `0` is a **falsy** value. If you check property presence using truthiness:
```javascript
// WRONG!
if (obj.d && obj.t) {
  // If d = 0, obj.d is 0 (falsy) => this block NEVER runs!
}
```
To correctly handle zero values (e.g. `d = 0` meters or `Δv = 0` m/s), check the type explicitly:
```javascript
// CORRECT!
if (typeof obj.d === 'number' && typeof obj.t === 'number') {
  return (2 * obj.d) / (obj.t ** 2);
}
```

### 3. Exponentiation Operator (`**`)
In ES2016+, use `t ** 2` for $t^2$ (or `Math.pow(t, 2)`).

---

## Edge Cases & Gotchas

> [!WARNING]
> - Always check `typeof obj.prop === 'number'` to prevent numeric `0` from failing conditional checks.
> - If none of the 3 formula parameter pairs are fully present and valid numbers, return the exact string `'impossible'`.

---

## Challenge Instructions

In `solution.js`, implement and export:

- **`getAcceleration(obj)`**:
  - Checks if `f` and `m` are numbers $\to$ returns $f / m$.
  - Checks if `Δv` and `Δt` are numbers $\to$ returns $\Delta v / \Delta t$.
  - Checks if `d` and `t` are numbers $\to$ returns $(2 \times d) / (t^2)$.
  - If none match, returns `'impossible'`.

---

## Progressive Hints

1. **Hint 1**: Write three independent `if` statements in sequence.
2. **Hint 2**: Check `typeof obj.f === 'number' && typeof obj.m === 'number'`.
3. **Hint 3**: Check `typeof obj.Δv === 'number' && typeof obj.Δt === 'number'` (notice the delta symbol `Δ`).
4. **Hint 4**: Check `typeof obj.d === 'number' && typeof obj.t === 'number'`.
5. **Hint 5**: Return `'impossible'` if no condition matches.
