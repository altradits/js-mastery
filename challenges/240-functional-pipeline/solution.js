export function pipeline(initialValue, ...fns) {
  let current = initialValue;
  const steps = [];
  fns.forEach((fn, idx) => {
    const input = current;
    current = fn(input);
    steps.push({ step: idx + 1, input, output: current });
  });
  return { initialValue, steps, result: current };
}
