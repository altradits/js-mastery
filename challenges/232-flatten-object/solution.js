export function flattenObject(obj) {
  const res = {};
  function traverse(curr, path = "") {
    for (const k of Object.keys(curr || {})) {
      const val = curr[k];
      const fullPath = path ? `${path}.${k}` : k;
      if (val !== null && typeof val === "object" && !Array.isArray(val) && Object.keys(val).length > 0) {
        traverse(val, fullPath);
      } else {
        res[fullPath] = val;
      }
    }
  }
  traverse(obj);
  return res;
}
