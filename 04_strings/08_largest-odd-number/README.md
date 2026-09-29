## Largest Odd Number

You are given a string `num`, representing a large integer. Return the **largest-valued odd** integer (as a string) that is a **non-empty substring** of `num`, or an empty string `""` if no odd integer exists.

A substring is a contiguous sequence of characters within a string.

### Solution

To solve this problem we need to run a reverse loop. We will start the loop from the end of the string and try to find out an odd number.

Once we find out an odd number we will return the substring till that number.

The loop sonn run till the length of the string.

### Time and Space Complexity

The Time complexity is `O(n)` where `n` is the length of the string.
The space complexity is `O(1)` as we are not using any extra space.

### LeetCode Reference

* Problem Number: 1903
* [Problem Link](https://leetcode.com/problems/largest-odd-number-in-string/description/)
