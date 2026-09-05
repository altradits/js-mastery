# Challenge 247: 247 — Checkpoint: Zoo Race Physics Simulation

## Concept & Mechanics
Piecewise multi-stage velocity physics calculations resolving animal racers through `Promise.race` concurrency.

## Mission Objective
Export `animal(...)` calculating piecewise race durations as a Promise and `zooRace(animals)` resolving the winner.

## Syntax Reference
```javascript
export function animal(name, maxSpeed, maxSpeedRange, midSpeed, midSpeedRange, speed, distance) {
  let time = 0;
  if (distance <= maxSpeedRange) {
    time = distance / maxSpeed;
  } else if (distance <= maxSpeedRange + midSpeedRange) {
    time = (maxSpeedRange / maxSpeed) + ((distance - maxSpeedRange) / midSpeed);
  } else {
    time = (maxSpeedRange / maxSpeed) + (midSpeedRange / midSpeed) + ((distance - maxSpeedRange - midSpeedRange) / speed);
  }
  const delayMs = Math.max(10, Math.round(time * 10));
  return new Promise(resolve => setTimeout(() => resolve(name), delayMs));
}

export function zooRace(animals) {
  return Promise.race(animals);
}
```

## Example Usage
```javascript
const winner = await zooRace([animal("Cheetah", 30, 80, 15, 100, 10, 200), animal("Turtle", 5, 20, 3, 50, 1, 200)]);
```
