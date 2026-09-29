const arr = [5, 2, 6, 0, 3];
function sum(n) {
  // base case
  if (n === 0) return arr[n];

  // Recursive case
  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));


// Formula = arr[n] + sum(n-1), where n is the index of the array.