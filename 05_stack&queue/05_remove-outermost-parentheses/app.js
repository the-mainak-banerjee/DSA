function removeOuterParentheses(s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans += s[i];
      }
    } else {
      if (stack.length > 1) {
        ans += s[i];
      }
      stack.pop();
    }
  }
  return ans;
}

function removeOuterParenthesesWithoutStack(s) {
  let result = [];
  let level = 0;
  for (let char of s) {
    if (char === "(") {
      level++;
      if (level > 1) {
        result.push(char);
      }
    } else {
      if (level >= 1) {
        result.push(char);
      }
      level--;
    }
  }
  return result.join("");
}
