const arr = [0, 5, 2, 4, 9]

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i
        }
    }

    return -1
}

const result = linearSearch(arr, 4)

console.log(result)