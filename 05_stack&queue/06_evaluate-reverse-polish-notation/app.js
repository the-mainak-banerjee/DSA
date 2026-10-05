function evalRPN(tokens) {
  let stack = []
  let map = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };
  for (let i = 0; i < tokens.length; i++) { 
    let item = tokens[i];
    if (map[item]) {
      let b = stack.pop();
      let a = stack.pop();
      let result = map[item](a, b);
      stack.push(result);
    } else {
      stack.push(parseInt(item));
    }
  }

  return stack.pop();
}