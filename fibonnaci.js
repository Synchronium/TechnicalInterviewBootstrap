// TCO Fibonnaci example
const fib = (n, sum = 1, prev = 1) => {
  if (n === 0) return 0;
  if (n <= 2) return sum;

  return fib(n - 1, sum + prev, sum);
};

module.exports = fib;
