function numJewelsInStones(jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++){
    for (let j = 0; j < jewels.length; j++){
      if (jewels[j] === stones[i]) {
        count++
        break
      }
    }
  }

  return count
}


function numJewelsInStonesOptimised(jewels, stones) {
  let set = new Set()

  for (let i = 0; i < jewels.length; i++){
    set.add(jewels[i])
  }

  let count = 0;

  for (let i = 0; i < stones.length; i++){
    if (set.has(stones[i])) {
      count++
    }
  }

  return count
}




console.log("Brute force", numJewelsInStones("aA", "aaAAbbb"));
console.log("Optimised", numJewelsInStonesOptimised("aA", "aaAAbbb"));