## Valid Anagram

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **anagram** is a word or string formed by rearranging all the characters of another string.

### Solution

To check whether two strings are anagrams, we need to make sure that both strings contain the **same characters with the same frequency**.

First, we can check whether both strings have the same length.

```js
if (s.length !== t.length) return false
```

If their lengths are different, they cannot be anagrams.

Now we can use a **hash-based data structure** to store the frequency of each character.

Maintain a `map` object:

```js
let map = {}
```

#### Step 1: Store the frequency of characters in `s`

Loop through every character of `s`.

* If the character doesn't exist in the `map`, initialize its count to `1`.
* Otherwise, increase its count by `1`.

For example:

```text
s = "anagram"

a → 3
n → 1
g → 1
r → 1
m → 1
```

This gives us the frequency of every character in `s`.

#### Step 2: Check the characters of `t`

Now loop through every character of `t`.

For every character:

* Check whether it exists in the `map`.
* If it doesn't exist, return `false` because `t` contains a character that wasn't present in `s`.
* If it exists, decrease its frequency by `1`.

For example, if:

```text
map["a"] = 3
```

and we find an `a` in `t`, we decrease it:

```text
map["a"] = 2
```

We keep doing this for every character in `t`.

If at any point the frequency is already `0` or the character doesn't exist, we return `false`. 

This is because if the frequency becomes 0 and the same character appears again in the loop, it means that character appears more times in t than it does in s.

If we successfully process the entire string `t`, it means both strings contain the same characters with the same frequencies, so we return `true`.

### Why Does This Work?

The important idea is that an anagram doesn't care about the **order** of characters.

For example:

```text
s = "listen"
t = "silent"
```

Both strings contain:

```text
l → 1
i → 1
s → 1
t → 1
e → 1
n → 1
```

The order is different, but the character frequencies are exactly the same.

So instead of comparing the order of the characters, we compare their **frequencies**.

### Time and Space Complexity

**Time Complexity:** `O(n)`

We loop through `s` once and `t` once.

Since both strings have the same length after the initial check, the overall complexity is `O(n)`.

**Space Complexity:** `O(1)`

Since the input consists of English letters, the `map` can contain at most a fixed number of characters.

If considering lowercase English letters only, there can be at most `26` keys. Therefore, the space used is constant.

### LeetCode Reference

* Problem Number: 242
* [Problem Link](https://leetcode.com/problems/valid-anagram/)
