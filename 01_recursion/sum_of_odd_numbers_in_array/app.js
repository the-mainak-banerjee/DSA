const arr = [8, 2, 7, 5, 3, 9];
function sum(n) {
  const isOdd = arr[n] % 2 !== 0;
  // base case
  if (n === 0) return isOdd ? arr[n] : 0;

  // Recursive case
  return (isOdd ? arr[n] : 0) + sum(n - 1);
}

console.log(sum(arr.length - 1));
