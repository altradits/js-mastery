export function createCurriedFilterAndMap(predicate) {
  return (transformFn) => (object) => {
    const result = {};
    for (const [key, value] of Object.entries(object || {})) {
      if (predicate(value, key)) {
        result[key] = transformFn(value, key);
      }
    }
    return result;
  };
}
