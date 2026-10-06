function dailyTemperatures(temperatures) {
  let stack = []
  let n = temperatures.length;
  let ans = Array(n).fill(0)

  stack.push(n - 1)
  
  for (let i = n - 2; i >= 0; i--){
    while (stack.length) {
      let top = stack[stack.length - 1]

      if (temperatures[i] >= temperatures[top]) {
        stack.pop()
      } else {
        ans[i] = top - i
        break;
      }
    }

    stack.push(i)
  }

  return ans
 }