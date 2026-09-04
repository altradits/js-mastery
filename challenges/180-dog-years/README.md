# 180 — Domain Modeling: Dog Years

## Concept
Calculate planetary dog ages by dividing earth orbital seconds (`31557600`) multiplied by orbital ratio.

## Syntax
```javascript
export function dogYears(planet, seconds) {
  const earthSeconds = 31557600;
  const ratios = { earth: 1, mercury: 0.2408467 };
  const earthYears = seconds / earthSeconds;
  const planetYears = earthYears / ratios[planet];
  return Number((planetYears * 7).toFixed(2));
}
```

## Quick Example
```javascript
dogYears("earth", 1000000000); // 221.82
```

## Task
Export a function `dogYears(planet, seconds)` supporting earth (`1`) and mercury (`0.2408467`) returning dog age rounded to 2 decimals.

---
**Run Test:** `node --test challenges/180-dog-years/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/180-dog-years/solution.test.js`
