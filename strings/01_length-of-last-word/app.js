function lengthOfLastWord(s) {
  let n = s.length - 1;

  while (n >= 0) {
    if (s[n] !== " ") break;
    n--;
  }

  let count = 0;
  while (n >= 0) {
    if (s[n] === " ") break;
    count++;
    n--;
  }

  return count;
}

function lengthOfLastWordApprochTwo(s) {
  let n = s.length - 1;
  let count = 0;

  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count) {
      break;
    }
    n--;
  }

  return count;
}

console.log(
  "Approach one: 'Hello world        '",
  lengthOfLastWord("Hello world        "),
);
console.log(
  "Approach two: 'Hello world        '",
  lengthOfLastWordApprochTwo("Hello world        "),
);

console.log("Approach one: '            '", lengthOfLastWord("            "));
console.log(
  "Approach two: '            '",
  lengthOfLastWordApprochTwo("            "),
);