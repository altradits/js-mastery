# 10 - Circular: Circular Object References & Cyclic Graphs

## Overview
Because objects in JavaScript are handled via **pointers (memory references)**, an object can contain a property that points back to itself. This creates a **circular reference** (or cyclic data structure).

In this challenge, you will create a self-referencing object and explore its behavior and implications in memory and serialization.

---

## Concept Deep-Dive: Self-Referencing Objects

### 1. Creating a Circular Reference
You cannot assign an object to its own property in a single literal declaration because the object identifier does not exist until the object is instantiated. Instead, instantiate the object first, then assign the property:
```javascript
const circular = {};
circular.circular = circular;
```

### 2. Infinite Pointer Chain
Because `circular.circular` points to `circular`, you can access `.circular` indefinitely:
```javascript
console.log(circular.circular === circular); // true
console.log(circular.circular.circular.circular === circular); // true
```

### 3. Memory & Garbage Collection
- In modern JavaScript engines (V8, SpiderMonkey), garbage collection uses a **Mark-and-Sweep** algorithm. 
- Even if two objects reference each other circularly, if they become unreachable from the root execution context, the garbage collector will safely reclaim their memory.

### 4. Serialization Hazard (`JSON.stringify`)
Standard JSON does not support circular references. If you pass a circular object to `JSON.stringify()`, JavaScript throws an uncaught error:
```javascript
JSON.stringify(circular); // TypeError: Converting circular structure to JSON
```

---

## Edge Cases & Gotchas

> [!WARNING]
> - Never use `JSON.parse(JSON.stringify(obj))` for deep cloning if the object could contain circular references.
> - Recursive traversal algorithms must keep track of visited nodes (e.g. using a `Set` or `WeakSet`) to prevent infinite recursion / stack overflow.

---

## Challenge Instructions

In `solution.js`, create and export:

- **`circular`**: An object that contains a property named `circular` whose value is the object itself (`circular.circular === circular`).

---

## Progressive Hints

1. **Hint 1**: Declare the object first: `export const circular = {};`.
2. **Hint 2**: On the next line, attach the circular property: `circular.circular = circular;`.
3. **Hint 3**: Verify that `circular.circular.circular === circular`.
