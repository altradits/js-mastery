# Challenge 246: 246 — Checkpoint: Trap Object Interceptor

## Concept & Mechanics
ES6 Proxies intercept internal engine `get` and `set` operations to execute observer callbacks with mutation parameters.

## Mission Objective
Export `trapObject(obj, fn)` invoking `fn('get' | 'set', ...)` on every property access and modification.

## Syntax Reference
```javascript
export function trapObject(obj, fn) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      const val = Reflect.get(target, prop, receiver);
      if (typeof prop === "string" && prop in target) {
        fn("get", prop, val);
      }
      return val;
    },
    set(target, prop, newValue, receiver) {
      const oldVal = target[prop];
      const success = Reflect.set(target, prop, newValue, receiver);
      if (typeof prop === "string") {
        fn("set", prop, oldVal, newValue);
      }
      return success;
    }
  });
}
```

## Example Usage
```javascript
const trapped = trapObject({ x: 10 }, (action, key, val, newVal) => console.log(action, key));
```
