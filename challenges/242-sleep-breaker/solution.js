export function sleepBreaker(delay, breaker) {
  const timeoutPromise = new Promise(resolve => setTimeout(() => resolve("timeout"), delay));
  const breakerPromise = Promise.resolve(typeof breaker === "function" ? breaker() : breaker).then(() => "broken");
  return Promise.race([timeoutPromise, breakerPromise]);
}
