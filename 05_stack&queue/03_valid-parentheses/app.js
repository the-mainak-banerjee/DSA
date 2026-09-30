function isValid(s) {
  let n = s.length
  let stack = []
  let map = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  for (let i = 0; i < n; i++){
    if (map[s[i]]) {
      stack.push(s[i])
    } else {
      let top = stack.pop()
      if (!top || map[top] !== s[i]) {
        return false
      }
    }
  }

  return stack.length === 0
}