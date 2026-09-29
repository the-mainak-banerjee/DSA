function largestOddNumber(num) {
  let n = num.length - 1;

  while (n >= 0) {
    if (Number(num[n]) % 2 === 1) {
      return num.substring(0, n + 1);
    }
    n--;
  }

  return ""
}

console.log("52", largestOddNumber("52"))
console.log("242", largestOddNumber("242"));
console.log("35427", largestOddNumber("35427"));

