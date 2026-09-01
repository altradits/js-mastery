# 08 - Async Fetch All

## Objective
Write an async function `fetchAllSettledData(tasks)` that accepts an array of asynchronous task factories `() => Promise<any>`, executes them concurrently, and returns all results using `Promise.allSettled()`.

## Constraints & Edge Cases
- Run tasks concurrently, not sequentially.
- Return `[]` for empty task arrays.
- Gracefully record both fulfilled and rejected states.
- Target Time: O(n) concurrent | Auxiliary Space: O(n)
