## Find Words Containing Character

You are given a **0-indexed** array of strings `words` and a character `x`.

Return an *array of indices* representing the words that contain the character `x`.

Note that the returned array may be in any order.

### Solution

We need to check each word and find out whether it contains the given character `x`.

For every word, we can loop through its characters and compare each character with `x`.

* Maintain a `result` array to store the indices of the words that contain `x`.
* Loop through the `words` array using `i`.
* For each word, run another loop through all of its characters using `j`.
* If `word[j] === x`, it means the current word contains the character.
* Add the index `i` to the `result` array.
* Once we find the character, we don't need to check the remaining characters of that word, so we can `break` the inner loop.
* After checking all the words, return `result`.

### Time and Space Complexity

**Time Complexity:** `O(n × m)`

Where:

* `n` = number of words.
* `m` = maximum length of a word.

In the worst case, we may need to check every character of every word.

**Space Complexity:** `O(1)`

The `result` array is not included in the process of the solution so we can say the space compelxity is `O(1)`.

### LeetCode Reference

* Problem Number: 2942
* [Problem Link](https://leetcode.com/problems/find-words-containing-character/description/)
