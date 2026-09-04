# 84 — Jaden Casing Strings

## Concept
Jaden Case capitalizes the first letter of every word in a sentence (combining `.split(' ')`, `.map()`, and `.join(' ')`).

## Syntax
```javascript
export function toJadenCase(str) {
  return str.split(" ").map(w => w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : "").join(" ");
}
```

## Quick Example
```javascript
toJadenCase("how are you"); // "How Are You"
```

## Task
Export a function `toJadenCase(str)` that capitalizes every word in `str`.

---
**Run Test:** `node --test challenges/84-jaden-case/solution.test.js`  
**Watch Mode:** `node --test --watch challenges/84-jaden-case/solution.test.js`
