export function trapObject(obj, fn) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      const val = Reflect.get(target, prop, receiver);
      if (typeof prop === "string" && prop in target) {
        fn("get", prop, val);
      }
      return val;
    },
    set(target, prop, newValue, receiver) {
      const oldVal = target[prop];
      const success = Reflect.set(target, prop, newValue, receiver);
      if (typeof prop === "string") {
        fn("set", prop, oldVal, newValue);
      }
      return success;
    }
  });
}
