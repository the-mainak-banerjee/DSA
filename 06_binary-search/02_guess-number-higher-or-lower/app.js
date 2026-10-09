const pick = 6;

var guess = function (num) {
  if (num > pick) return -1;
  if (num < pick) return 1;
  return 0;
};


function guessNumber(n) {
  let l = 1;
  let r = n;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let res = guess(mid);
    if(res === 0) {
      return mid;
    }else if(res === 1) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r
}