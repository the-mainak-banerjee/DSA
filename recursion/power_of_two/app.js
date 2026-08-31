function powerOfTwo(n) {
  // Base cases
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 !== 0) {
    return false;
  }

  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(8));

/**
 * Keep dividing the number by 2, if it reaches to 1 then it is power of 2
 * But if it goes less than one or if the number is an odd number then it is not power of 2
 */
