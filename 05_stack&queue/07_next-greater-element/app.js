function nextGreaterElement(a1, a2) {
  let ngeMap = {}
  let stack = []
  let n = a2.length
  let lastElement = a2[n - 1]
  
  ngeMap[lastElement] = -1
  stack.push(lastElement)

  for (let i = n - 2; i >= 0; i--){
    while (stack.length) {
      let top = stack[stack.length - 1]
      if (a2[i] > top) {
        stack.pop()
      } else {
        ngeMap[a2[i]] = top
        break;
      }
    }

    if (!stack.length) {
      ngeMap[a2[i]] = -1
    }

    stack.push(a2[i])
  }


  return a1.map(item => ngeMap[item])
}