## Length of Last Word

Given a string `s` consisting of words and spaces, return the length of the last word in the string.

A word is a maximal **substring** consisting of non-space characters only.

### Solution

Before solving the problem, we need to figure out what cases we need to handle:

* The sentence can have trailing spaces at the end, so we need to ignore them.
* The sentence can contain only spaces and no words at all.

Now let's think about how we can solve this.

* Since we need to find the length of the **last** word, we can start from the end of the string and move backwards.
* First, we need to skip all the trailing spaces until we find a character.
* Once we find a character, we can start counting the characters of the last word.
* We keep counting until we reach another space or the beginning of the string.

We can solve this using two approaches.

#### Approach 1: Using Two Loops

Maintain a variable `n` to keep track of the current position in the string.

First, run a loop to find the last word:

* Start from the last character of the string.
* Keep decreasing `n`.
* Skip all the spaces at the end.
* Break the loop once we find a character.

Next, maintain another variable `count` to count the characters of the last word.

* Run another loop starting from the current value of `n`.
* Keep increasing `count` as long as we find characters.
* Keep decreasing `n` after each iteration.
* Break the loop when we find a space.

At the end, `count` will contain the length of the last word.

#### Approach 2: Using One Loop

This approach follows the same idea as the first approach, but we can handle everything inside a single loop.

Maintain two variables:

* `n` — keeps track of the current position in the string.
* `count` — keeps track of the length of the last word.

Run the loop from the end of the string:

* Keep decreasing `n`.
* Once we find a character, start increasing `count`.
* Continue counting characters as we move backwards.
* Break the loop only when `count` is greater than `0` and we encounter a space.

At the end, `count` will contain the length of the last word.

### Time and Space Complexity

Both approaches have:

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(1)`

### LeetCode Reference

* Problem Number: 58
* [Problem Link](https://leetcode.com/problems/length-of-last-word/description/)
