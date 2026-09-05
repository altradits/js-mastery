export function palindromicChain(n) {
  let curr = n;
  let steps = 0;
  const isPal = num => String(num) === String(num).split('').reverse().join('');
  while (!isPal(curr) && steps < 1000) {
    const rev = parseInt(String(curr).split('').reverse().join(''), 10);
    curr += rev;
    steps++;
  }
  return { steps, palindrome: curr };
}
