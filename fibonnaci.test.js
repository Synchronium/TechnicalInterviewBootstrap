const fib = require('./index');

describe('fib function', () => {
  it('should calculate fib when n = 6', () => {
    expect(fib(6)).toEqual(8);
  });
});
