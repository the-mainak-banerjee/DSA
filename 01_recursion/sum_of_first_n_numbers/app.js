function sum(n) {
    // Base case
    if (n === 0) return 0;

    // Recursive case
    return n + sum(n-1)
}

console.log(sum(8))