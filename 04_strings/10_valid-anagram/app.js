function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }


  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!map[char]) {
      return false;
    } else {
      map[char]--;
    }
  }

  return true;
}


console.log("aabccc, aaabcc", isAnagram("aabccc", "aaabcc"))