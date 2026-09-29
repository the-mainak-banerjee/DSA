const arr = [-1, 0, 3, 5, 9, 12];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      return middle;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const result = binarySearch(arr, 9)

console.log(result)
