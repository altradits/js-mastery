# 181 — Domain Modeling: Physics Acceleration

## Concept
Acceleration $a = \Delta v / \Delta t$ or $a = 2d / t^2$ or $a = F / m$. Select the formula matching available properties.

## Syntax
```javascript
export function getAcceleration(obj) {
  if (obj.f !== undefined && obj.m !== undefined) return obj.f / obj.m;
  if (obj.Δv !== undefined && obj.Δt !== undefined) return obj.Δv / obj.Δt;
  if (obj.d !== undefined && obj.t !== undefined) return (2 * obj.d) / (obj.t * obj.t);
  return "impossible";
}
```

## Quick Example
```javascript
getAcceleration({ f: 10, m: 2 }); // 5
```

## Task
Export `getAcceleration(obj)` returning the computed acceleration or `"impossible"`.

---
**Run Test:** `node --test challenges/181-physics-acceleration/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/181-physics-acceleration/solution.test.js`
