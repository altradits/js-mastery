export function animal(name, maxSpeed, maxSpeedRange, midSpeed, midSpeedRange, speed, distance) {
  let time = 0;
  if (distance <= maxSpeedRange) {
    time = distance / maxSpeed;
  } else if (distance <= maxSpeedRange + midSpeedRange) {
    time = (maxSpeedRange / maxSpeed) + ((distance - maxSpeedRange) / midSpeed);
  } else {
    time = (maxSpeedRange / maxSpeed) + (midSpeedRange / midSpeed) + ((distance - maxSpeedRange - midSpeedRange) / speed);
  }
  const delayMs = Math.max(5, Math.round(time * 10));
  return new Promise(resolve => setTimeout(() => resolve(name), delayMs));
}

export function zooRace(animals) {
  return Promise.race(animals);
}
