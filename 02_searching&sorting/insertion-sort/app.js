const arr = [7,1,5,12,0,4,3,2]

function insertionSort(arr) {
  const n = arr.length
  for (let i = 1; i < n; i++){
    let currElement = arr[i];
    let prevIdx = i - 1;

    while (arr[prevIdx] > currElement && prevIdx >= 0) {
      arr[prevIdx + 1] = arr[prevIdx];
      prevIdx--;
    }

    arr[prevIdx + 1] = currElement;
  }

  return arr;
}

const result = insertionSort(arr);

console.log(result);
