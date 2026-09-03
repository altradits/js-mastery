# 17 - Dog Years: Precision Math & Planetary Orbital Calculations

## Overview
A dog's age in human years is commonly calculated using the multiplier $7$. But what if that dog lived on another planet in the solar system?

Each planet has a different orbital period around the Sun relative to Earth. In this challenge, you will convert time measured in seconds into planet years, compute the dog's age, and format the result to 2 decimal places using `toFixed(2)`.

---

## Concept Deep-Dive: Floating-Point Math & Rounding

### 1. Planetary Orbital Periods
An Earth solar year is approximately $31,557,600$ seconds ($365.25$ Earth days). The orbital period factors relative to Earth (where Earth = 1.0) are:
- `earth`: $1.0$
- `mercury`: $0.2408467$
- `venus`: $0.61519726$
- `mars`: $1.8808158$
- `jupiter`: $11.862615$
- `saturn`: $29.447498$
- `uranus`: $84.016846$
- `neptune`: $164.79132$

### 2. The Conversion Formula
$$\text{Earth Years} = \frac{\text{seconds}}{31557600}$$
$$\text{Planet Years} = \frac{\text{Earth Years}}{\text{orbitalPeriod}[\text{planet}]}$$
$$\text{Dog Age} = \text{Planet Years} \times 7$$

### 3. Precision Formatting with `.toFixed()`
`Number.prototype.toFixed(digits)` formats a number using fixed-point notation and returns a **string**:
```javascript
const num = 14.2857;
num.toFixed(2); // "14.29" (String)
```
To convert the resulting string back into a numeric floating-point value, wrap it with `Number(...)` or `parseFloat(...)`:
```javascript
Number(num.toFixed(2)); // 14.29 (Number)
```

---

## Edge Cases & Gotchas

> [!NOTE]
> - `.toFixed(2)` returns a `string`. You must return a `number` (`Number(result.toFixed(2))`).
> - Handle lowercase planet names matching the dictionary keys.

---

## Challenge Instructions

In `solution.js`, implement and export:

- **`dogYears(planet, seconds)`**:
  - Calculates the dog's age on the specified planet.
  - Returns the age as a **Number** rounded to two decimal places.

---

## Progressive Hints

1. **Hint 1**: Store the orbital periods in an object lookup table.
2. **Hint 2**: Calculate `earthYears = seconds / 31557600`.
3. **Hint 3**: Calculate `planetYears = earthYears / orbitalPeriods[planet]`.
4. **Hint 4**: Return `Number((planetYears * 7).toFixed(2))`.
