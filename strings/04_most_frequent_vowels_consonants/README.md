## Find Most Frequent Vowel and Consonant

You are given a string `s` consisting of lowercase English letters.

Return the sum of the highest frequency of any vowel and the highest frequency of any consonant.

### Solution

We need to find the most frequent vowel and the most frequent consonant in the string.

We can use a `Map` to store the frequency of each character.

* Create a `charMap` to store the frequency of every character.

* Loop through the string and increase the frequency of each character in the `charMap`.

* Create a `Set` containing the five vowels: `a`, `e`, `i`, `o`, and `u`.

* Maintain two variables, `maxVowel` and `maxConsonant`, to store the highest frequency found so far.

* Loop through the characters and their frequencies in the `charMap`.

* If the character is present in the `vowels` `Set`, update `maxVowel`.

* Otherwise, update `maxConsonant`.

* Finally, return `maxVowel + maxConsonant`.

### Time and Space Complexity

**Time Complexity:** `O(n)`

Where:

* `n` = length of the string.

We loop through the string once to calculate the frequencies.

Then we loop through the `charMap`. Since the string contains only lowercase English letters, there can be at most `26` different characters.

So the total complexity is:

`O(n) + O(26)`

Since `26` is a constant:

`O(n)`

**Space Complexity:** `O(1)`

The `charMap` can contain at most `26` characters, and the `vowels` `Set` always contains only `5` characters.

Therefore, the extra space remains constant.

### LeetCode Reference

* Problem Number: 3541

* [Problem Link](https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/)