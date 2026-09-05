# Challenge 225: 225 — Checkpoint: Curried Filter and Map

## Concept & Mechanics
Curried functional pipelines decouple filtering criteria from mapping transforms over dictionary objects.

## Mission Objective
Export `createCurriedFilterAndMap(predicate)(transformFn)(object)` that filters object entries by predicate and maps the remaining values.

## Syntax Reference
```javascript
export function createCurriedFilterAndMap(predicate) {
  return (transformFn) => (object) => {
    const result = {};
    for (const [key, value] of Object.entries(object || {})) {
      if (predicate(value, key)) {
        result[key] = transformFn(value, key);
      }
    }
    return result;
  };
}
```

## Example Usage
```javascript
createCurriedFilterAndMap(v => typeof v === "number")(v => v * 2)({ a: 5, b: "hi" }); // { a: 10 }
```
