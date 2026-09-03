# 07 - Last First Kiss: Zero-Based Indexing & Swapped Returns

## Overview
In JavaScript, sequence data structures like **Arrays** and **Strings** are **zero-indexed**.
The very first element is positioned at index `0`, and the final element is located at index `length - 1`.

In this challenge, you will implement functions to extract the boundaries of any sequence and combine them into a swapped pair array.

---

## Concept Deep-Dive: Indexing Sequences

### 1. Bracket Notation Indexing
You access characters in strings or elements in arrays using square bracket notation:
```javascript
const fruits = ["apple", "banana", "cherry"];
fruits[0]; // "apple" (First element)

const word = "hello";
word[0]; // "h" (First character)
```

### 2. Extracting the Last Element
Because sequences start at index `0`, an array of length $N$ has its last element at index $N - 1$:
```javascript
const lastItem = sequence[sequence.length - 1];
```

### 3. Returning Multi-Element Arrays
Functions can bundle multiple computed values by returning a freshly constructed array literal:
```javascript
function makePair(a, b) {
  return [a, b];
}
```

---

## Edge Cases & Gotchas

> [!NOTE]
> - Out-of-bounds indices in JavaScript do not throw an error; they evaluate to `undefined` (e.g. `[][0]` is `undefined`).
> - Single element sequences: For `[42]`, both `first([42])` and `last([42])` return `42`, so `kiss([42])` returns `[42, 42]`.

---

## Challenge Instructions

In `solution.js`, implement and export:

1. **`first(arg)`**: Returns the first element or character (`arg[0]`).
2. **`last(arg)`**: Returns the last element or character (`arg[arg.length - 1]`).
3. **`kiss(arg)`**: Returns a new array with 2 elements: `[last(arg), first(arg)]`.

All three functions must work seamlessly with both **arrays** and **strings**.

---

## Progressive Hints

1. **Hint 1**: `first(arg)` is `arg[0]`.
2. **Hint 2**: `last(arg)` is `arg[arg.length - 1]`.
3. **Hint 3**: In `kiss(arg)`, you can call your own `last` and `first` helper functions: `return [last(arg), first(arg)];`.
