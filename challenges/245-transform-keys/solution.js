export function transformKeys(obj, transformFn) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(item => transformKeys(item, transformFn));
  const res = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = transformFn(key);
    res[newKey] = transformKeys(value, transformFn);
  }
  return res;
}
