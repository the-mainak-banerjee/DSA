function balancedStringSplitApprochOne(s) {
  let count = 0;
  let r = 0
  let l = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      r++;
    } else {
      l++;
    }

    if (r === l) {
      count++;
    }
  }

  return count;
}

function balancedStringSplitApprochTwo(s) {
  let temp = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }

    if (!temp) {
      count++;
    }
  }

  return count;
}


console.log("Approach one", balancedStringSplitApprochOne("RLRRLLRLRL"));
console.log("Approach two", balancedStringSplitApprochTwo("RLRRLLRLRL"));