function factorial(n) {
  if (n === 0) { return 1; }
  console.log(n, 'n');
  return n * factorial(n - 1);
}

console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(10));

