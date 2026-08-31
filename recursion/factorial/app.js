function fact(n) {
    // Handle negative numbers
    if(n<0) return NaN
    // Base case
    if (n === 1) return 1;

    // Recursive case
    return n * fact(n - 1)
}

console.log(fact(4))

// Formula => fact(n) =  n * fact(n-1).