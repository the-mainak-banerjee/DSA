function maxFreqSum(s) {
  let freq = new Map();

  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], (freq.get(s[i]) || 0) + 1);
  }

  let vowels = new Set(["a", "e", "i", "o", "u"]);

  let maxV = 0;
  let maxC = 0;

  for (const [char, count] of freq) {
    if (vowels.has(char)) {
      maxV = Math.max(count, maxV);
    } else {
      maxC = Math.max(count, maxC);
    }
  }

  return maxC + maxV;
}

console.log(maxFreqSum("successes"));
