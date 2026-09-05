export async function FinalAttempt(asyncFn, maxRetries = 3, delay = 50) {
  let lastError;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await asyncFn();
    } catch (err) {
      lastError = err;
      if (attempt < maxRetries) {
        await new Promise(res => setTimeout(res, delay));
      }
    }
  }
  throw lastError;
}
