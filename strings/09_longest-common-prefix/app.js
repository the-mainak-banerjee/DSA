function longestCommonPrefix(strs) {
  let x = 0;
  while (x < strs[0].length) {
    let ch = strs[0][x]
    for (let i = 0; i < strs.length; i++){
      if (ch !== strs[i][x] || x === strs[i].length) {
        return strs[0].substring(0,x) 
      }
    }
    x++
  }

  return strs[0]
}

console.log(
  `["flower","flow","flight"]`,
  longestCommonPrefix(["flower", "flow", "flight"]),
);
console.log(
  `["dog","racecar","car"]`,
  longestCommonPrefix(["dog", "racecar", "car"]),
);
console.log(`["fl","fl", "fl"]`, longestCommonPrefix(["fl", "fl", "fl"]));


