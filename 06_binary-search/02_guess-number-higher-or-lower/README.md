## 374. Guess Number Higher or Lower

We are playing a guessing game where a number is picked between `1` and `n`.

Our task is to find the picked number. Every time we make a guess, the `guess(num)` API tells us whether our guess is too high, too low, or correct.

The API returns:

- `-1`: Our guess is higher than the picked number.
- `1`: Our guess is lower than the picked number.
- `0`: Our guess is correct.

### Solution

#### Approach: Binary Search

We can solve this problem using **Binary Search** because the possible answers are in a sorted range from `1` to `n`.

Instead of guessing every number one by one, we guess the middle number and use the API's response to eliminate half of the remaining search space.

We maintain two pointers:

- `l`: The lowest possible number.
- `r`: The highest possible number.

At every iteration:

1. Calculate the middle number `m`.
2. Call `guess(m)` to check whether our guess is correct.
3. If the result is `0`, return `m` because we found the picked number.
4. If the result is `-1`, our guess is too high. Move `r` to `m - 1`.
5. Otherwise, our guess is too low. Move `l` to `m + 1`.

We repeat this process until we find the correct number.

### Example Walkthrough

Suppose `n = 10` and the picked number is `6`.

| Step | `l` | `r` | `m` | API result | Action |
|---|---:|---:|---:|---|---|
| 1 | 1 | 10 | 5 | `1` | Guess is too low, so `l = 6` |
| 2 | 6 | 10 | 8 | `-1` | Guess is too high, so `r = 7` |
| 3 | 6 | 7 | 6 | `0` | Correct guess |

The answer is `6`.

### Why calculate the middle this way?

```js
let m = l + Math.floor((r - l) / 2)
```

This calculates the middle of the current search range without adding `l + r` directly.

In languages with fixed-width integers, this helps avoid potential integer overflow. JavaScript's `Number` type has different limits, but this is still a useful binary search pattern.

### Time and Space Complexity

- **Time:** `O(log n)` — each guess eliminates approximately half of the remaining possibilities.
- **Space:** `O(1)` — we only use a few variables.

### Mental Model

Whenever you need to find a number within a sorted range and each comparison tells you which half to search next, think about **Binary Search**.

Instead of checking every possible answer, use the information from each guess to eliminate half of the search space.

### LeetCode Reference

- Problem Number: 374
- [Problem Link](https://leetcode.com/problems/guess-number-higher-or-lower/)