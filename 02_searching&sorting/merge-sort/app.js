const arr = [8, 4, 5, 6, 9, 1, 3, 7];

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;

  const n = arr.length;
  const middleIdx = Math.floor(n / 2);

  const left = mergeSort(arr.slice(0, middleIdx));
  const right = mergeSort(arr.slice(middleIdx));

  return merge(left, right);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

const result = mergeSort(arr);

console.log(result);
