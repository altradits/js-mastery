# Challenge 238: 238 — Checkpoint: Palindromic Chain (196 Algorithm)

## Concept & Mechanics
Repeatedly adds a number to its reversed digits until a palindromic number is formed, recording step history.

## Mission Objective
Export `palindromicChain(n)` returning `{ steps, palindrome }` by adding reverse digits until palindrome.

## Syntax Reference
```javascript
export function palindromicChain(n) {
  let curr = n;
  let steps = 0;
  const isPal = num => String(num) === String(num).split('').reverse().join('');
  while (!isPal(curr) && steps < 1000) {
    const rev = parseInt(String(curr).split('').reverse().join(''), 10);
    curr += rev;
    steps++;
  }
  return { steps, palindrome: curr };
}
```

## Example Usage
```javascript
palindromicChain(87); // { steps: 4, palindrome: 4884 }
```
