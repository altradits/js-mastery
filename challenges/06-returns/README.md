# 06 - Returns: Identity Functions & Length Extraction

## Overview
Every function in JavaScript evaluates to a return value. If no explicit `return` statement is provided, the function implicitly returns `undefined`.

In this challenge, you will explore two fundamental functional programming concepts:
1. The **Identity Function** (the simplest possible combinator in computer science).
2. Accessing the `.length` property across data structures (Strings and Arrays).

---

## Concept Deep-Dive: Identity & Property Access

### 1. The Identity Combinator `id`
In mathematics and functional programming, the identity function $I(x) = x$ is a function that returns its argument completely unchanged. It acts as the neutral element of function composition:
```javascript
function id(arg) {
  return arg;
}
id("test");  // "test"
id(42);      // 42
id([1, 2]);  // [1, 2]
```

### 2. The `.length` Property
In JavaScript, several standard data types possess a `.length` property:
- **Strings**: Represents the number of UTF-16 code units in the string.
  ```javascript
  "hello".length; // 5
  "".length;      // 0
  ```
- **Arrays**: Represents the number of elements in the array.
  ```javascript
  [10, 20, 30].length; // 3
  [].length;           // 0
  ```

---

## Edge Cases & Gotchas

> [!NOTE]
> - Properties vs Methods: `.length` is a property, not a method! Writing `arg.length()` will throw a `TypeError: arg.length is not a function`.
> - Empty collections: `"".length` and `[].length` both safely evaluate to `0`.

---

## Challenge Instructions

In `solution.js`, implement and export:

1. **`id(arg)`**: Takes any value `arg` and returns it without modification.
2. **`getLength(arg)`**: Takes an argument `arg` (such as a string or array) and returns its `.length` property value.

---

## Progressive Hints

1. **Hint 1**: For `id`, simply `return arg;`.
2. **Hint 2**: For `getLength`, access the property `arg.length` and return it.
3. **Hint 3**: Do not add parentheses after `length`.
