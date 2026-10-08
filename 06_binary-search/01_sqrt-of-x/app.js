function mySqrt(x) {
  if (x < 2) return x

  let l = 2;
  let r = Math.floor(x / 2)
  
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let squareOfMid = middle * middle

    if (x === squareOfMid) {
      return middle
    } else if(x < squareOfMid) {
      r = middle - 1
    } else {
      l = middle + 1
    }
  }

  return r;
}