# Challenge 240: 240 — Checkpoint: Functional Pipeline with Audit Trace

## Concept & Mechanics
Data pipelines thread values through a sequence of unary functions and record intermediate execution states.

## Mission Objective
Export `pipeline(initialValue, ...fns)` returning `{ initialValue, steps: [...], result }`.

## Syntax Reference
```javascript
export function pipeline(initialValue, ...fns) {
  let current = initialValue;
  const steps = [];
  fns.forEach((fn, idx) => {
    const input = current;
    current = fn(input);
    steps.push({ step: idx + 1, input, output: current });
  });
  return { initialValue, steps, result: current };
}
```

## Example Usage
```javascript
pipeline(5, x => x * 2, x => x + 3); // { initialValue: 5, steps: [...], result: 13 }
```
