# 73 — Loop Control (break & continue)

## Concept
`break` terminates a loop immediately; `continue` skips to the next iteration.

## Syntax
```javascript
export function sumUntilNegative(numbers) {
  let total = 0;
  for (const n of numbers) {
    if (n < 0) break;
    if (n === 0) continue;
    total += n;
  }
  return total;
}
```

## Quick Example
```javascript
for (const x of [1, -1]) { if (x < 0) break; }
```

## Task
Export a function `sumUntilNegative(numbers)` that sums positive numbers until encountering a negative number (stopping via `break`).

---
**Run Test:** `node --test challenges/73-break-continue/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/73-break-continue/solution.test.js`
