function findWordsContaining(words, x) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === x) {
        result.push(i);
        break;
      }
    }
  }

  return result;
}

console.log(
  "Words are: [`leet`,`code`], 2",
  findWordsContaining(["leet", "code"], "e"),
);
