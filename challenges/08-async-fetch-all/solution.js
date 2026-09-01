/**
 * Executes an array of asynchronous task factories concurrently and returns all settled results.
 * @param {(() => Promise<any>)[]} tasks
 * @returns {Promise<PromiseSettledResult<any>[]>}
 */
export async function fetchAllSettledData(tasks) {
  if (tasks.length === 0) return [];

  const executions = tasks.map((task) => task());
  return Promise.allSettled(executions);
}