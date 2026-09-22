## Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Solution

To solve this problem, we can compare the characters of all the strings with the characters of the first string.

The first string can act as our reference because the longest common prefix cannot be longer than the first string.

Maintain a variable `x` to represent the current character position in the first string.

```js
let x = 0
```

Then we can use two loops.

#### Step 1: Loop through the first string

We start from the first character of `strs[0]` and continue until we reach the end of the string.

For every position, store the current character:

```js
let char = strs[0][x]
```

This character is what every other string needs to have at the same position.

#### Step 2: Compare with the remaining strings

Now loop through all the other strings starting from index `1`.

For every string, compare:

```js
char !== strs[i][x]
```

There are two cases where we need to stop:

* The current character is different from the character at the same position in another string.
* We have reached the end of another string.

```js
if(char !== strs[i][x] || x === strs[i].length){
    return strs[0].substring(0, x)
}
```

If either condition is true, we have found the end of the common prefix.

We can then return the part of the first string from index `0` up to `x`.

#### Step 3: Move to the next character

If the current character exists and matches in every string, increase `x` and check the next character.

```js
x++
```

If we successfully reach the end of the first string, it means the entire first string is a common prefix, so we return:

```js
return strs[0]
```

### Example

For:

```js
["flower", "flow", "flight"]
```

We compare the characters position by position:

```text
flower
flow
flight

f → common
l → common
o → common
w → not common
```

So the longest common prefix is:

```text
"fl"
```

### Time and Space Complexity

Let:

* `n` = number of strings.
* `m` = length of the shortest string.

**Time Complexity:** `O(n × m)`

In the worst case, we may need to compare every character of every string until we reach the end of the shortest string.

**Space Complexity:** `O(1)`

We only use a few variables such as `x` and `char`. The returned substring is the output and is not considered auxiliary space.

### LeetCode Reference

* Problem Number: 14
* [Problem Link](https://leetcode.com/problems/longest-common-prefix/)
