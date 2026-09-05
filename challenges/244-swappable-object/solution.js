export function swappableObject(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      if (prop in target) return target[prop];
      for (const [k, v] of Object.entries(target)) {
        if (String(v) === String(prop)) return k;
      }
      return undefined;
    }
  });
}
