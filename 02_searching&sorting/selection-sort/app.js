const arr = [7, 1, 5, 4, 3, 2];

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Lets find the minimum
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    // Lets swap the new minimum value with the i position value
    if (arr[minIdx] !== arr[i]) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }

  return arr
}

const result = selectionSort(arr);

console.log(result);
