# 06 - Group By Category

## Objective
Write a function `groupByCategory(items, key)` that groups an array of objects into a dictionary object keyed by the specified property.

## Constraints & Edge Cases
- Use `Array.prototype.reduce()`.
- If an object lacks the key, group it under key `'undefined'`.
- Return `{}` for empty array.
- Target Time: O(n) | Auxiliary Space: O(n)
