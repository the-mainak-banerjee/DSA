## Reverse String II

Given a string `s` and an integer `k`, reverse the first `k` characters for every `2k` characters counting from the start of the string.

If there are fewer than `k` characters left, reverse all of them.

If there are less than `2k` but greater than or equal to `k` characters left, reverse the first `k` characters and leave the remaining characters unchanged.

### Solution

The main thing we need to figure out is:

> **For every `2k` characters, which part do we actually need to reverse?**

So we need to move through the string in steps of `2k`.

Since strings are immutable in JavaScript, we first convert the string into an array:

Now we can modify the characters directly.

We can solve the problem using two loops.

#### Step 1: Move through every `2k` characters

We start our outer loop from `0` and increase `i` by `2k` every time:

#### Step 2: Find how many characters need to be reversed

We don't always have exactly `k` characters remaining.

For example:

* If there are more than `k` characters left → reverse `k` characters.
* If there are fewer than `k` characters left → reverse all remaining characters.

So we calculate:

```js
let n = Math.min(k, length - i)
```

Here:

* `k` is the maximum number of characters we want to reverse.
* `length - i` tells us how many characters are actually remaining.

Using `Math.min()` makes sure that `n` never goes beyond the remaining characters.

#### Step 3: Reverse the first `n` characters

Now we need to reverse the section from:

```text
i → i + n - 1
```

To reverse it, we only need to move through half of the section.

So we calculate:

```js
let middle = Math.floor(n / 2)
```

Then we use another loop to swap the characters from both ends:

```text
left →       ← right

[a] [b] [c] [d]
 ↑           ↑
swap         swap
```

For every iteration:

```js
let temp = arr[j + i]
arr[j + i] = arr[i + n - 1 - j]
arr[i + n - 1 - j] = temp
```

Here:

* `j + i` represents the character from the left side.
* `i + n - 1 - j` represents the corresponding character from the right side.

After swapping the characters, the first `n` characters of the current `2k` group are reversed.

We repeat this process by moving `i` forward by `2k`.

Finally, we convert the array back into a string:

```js
return arr.join("")
```

### Time and Space Complexity

Let `n` be the length of the string.

**Time Complexity:** `O(n)`

Although we have two loops, the inner loop only processes half of each `k`-sized section, and the outer loop processes the string in `2k` steps. Overall, every character that needs to be reversed is processed once, giving us `O(n)` time.

**Space Complexity:** `O(n)`

We convert the string into an array using:

```js
s.split("")
```

which requires `O(n)` additional space.

### LeetCode Reference

* Problem Number: 541
* [Problem Link](https://leetcode.com/problems/reverse-string-ii/description/)
