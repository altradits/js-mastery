# 71 — For..Of Loop (String Search & Counting)

## Concept
`for (const char of str)` iterates through every character of a string.

## Syntax
```javascript
export function countLetter(str, target) {
  let count = 0;
  for (const char of str) {
    if (char === target) {
      count = count + 1;
    }
  }
  return count;
}
```

## Quick Example
```javascript
for (const ch of "abc") { console.log(ch); }
```

## Task
Export a function `countLetter(str, target)` that loops through `str` using `for..of` and returns the number of times `target` appears.

---
**Run Test:** `node --test challenges/71-for-of-string/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/71-for-of-string/solution.test.js`
