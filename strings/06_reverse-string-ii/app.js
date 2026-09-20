function reverseStr(s, k) {
  let arr = s.split("")
  let length = arr.length;

  for (let i = 0; i < length; i = i + (2 * k)){
    let n = Math.min(k, (length - i))
    let middle = Math.floor(n / 2)
    
    for (let j = 0; j < middle; j++){
      let temp = arr[j + i]
      arr[j + i] = arr[i + n - 1 - j]
      arr[i + n - 1 - j] = temp
    }
  }

  return arr.join("")
}

console.log(reverseStr("abcdefghijklmnopqrst",3))