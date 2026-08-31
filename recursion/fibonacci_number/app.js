function fib(n) {
  // Base case
  if (n <= 1) return n;

  // Recursive case
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));



// Iterative approch

function f(n) {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, curr + prev];
  }

  return curr;
}
console.log(f(6));
