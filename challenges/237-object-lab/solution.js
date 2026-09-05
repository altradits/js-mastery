export function mergeAndTransform(objArray, transforms = {}) {
  const merged = Object.assign({}, ...objArray);
  const result = {};
  for (const [key, val] of Object.entries(merged)) {
    result[key] = typeof transforms[key] === "function" ? transforms[key](val) : val;
  }
  return result;
}
