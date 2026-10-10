const firstBad = 4;

var isBadVersion = function (version) {
  return version >= firstBad;
};

function solution(isBadVersion) { 
  return function (n) { 
    let l = 1;
    let r = n;
    while (l < r) {
      let mid = l + Math.floor((r - l) / 2)
      let isMidBad = isBadVersion(mid)

      if (isMidBad) {
        r=mid
      } else {
        l = mid + 1
      }
    }

    return r
  }
}