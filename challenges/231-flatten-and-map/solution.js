export function flattenAndMap(nestedObj, mapFn) {
  const result = {};
  function recurse(curr, prefix = "") {
    for (const key of Object.keys(curr || {})) {
      const val = curr[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (val !== null && typeof val === "object" && !Array.isArray(val) && Object.keys(val).length > 0) {
        recurse(val, newKey);
      } else {
        result[newKey] = mapFn(val, newKey);
      }
    }
  }
  recurse(nestedObj);
  return result;
}
