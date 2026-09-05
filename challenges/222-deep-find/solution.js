export function deepFind(obj, path) {
  if (!obj || typeof path !== "string") return undefined;
  return path.split('.').reduce((acc, key) => (acc !== null && acc !== undefined ? acc[key] : undefined), obj);
}
