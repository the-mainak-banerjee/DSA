function isPalindromeApproch1(s) {
  s = s.toLowerCase();

  let filteredStr = ""
  let revStr = ""


  for (let i = 0; i < s.length; i++){
    if (s[i].match(/^[a-z0-9]$/)) {
      filteredStr += s[i]
      revStr = s[i] + revStr
    }
  }

  return filteredStr === revStr
}

// using 2 pointer approch

function isPalindromeApproch2(s) {
  s = s.toLowerCase()

  let left = 0
  let right = s.length - 0
  let alphaNumericReg = /^[a-z0-9]$/

  while (right > left) {
    if (!left.match(alphaNumericReg)) {
      left++
    } else if (!right.match(alphaNumericReg)) {
      right--
    } else if (left === right) {
      left++
      right--
    } else {
      return false
    }
  }

  return true
}