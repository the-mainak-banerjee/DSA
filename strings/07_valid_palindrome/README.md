## Valid Palindrome

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

### Solution

There are two ways we can think about solving this problem.

#### Approach 1: Create a Filtered and Reversed String

In this approach, we can create a new string containing only the alphanumeric characters.

First, convert the entire string to lowercase.

Then:

* Maintain a variable `filteredStr` to store only the alphanumeric characters.
* Maintain another variable `revStr` to store the characters in reverse order.
* Loop through the string.
* Check whether the current character is alphanumeric using a regular expression.
* If it is alphanumeric, add it to `filteredStr`.
* At the same time, add the character to the beginning of `revStr`.

For example:

```text
Original:     "A man, a plan"
Filtered:     "amanaplan"
Reversed:     "nalpanama"
```

Finally, compare `filteredStr` and `revStr`.

If both strings are equal, the original string is a palindrome.

The disadvantage of this approach is that we create additional strings.

#### Approach 2: Using Two Pointers

Instead of creating a new filtered string and its reverse, we can compare the characters directly from both ends of the original string.

Maintain two pointers:

* `left` — starts at the beginning of the string.
* `right` — starts at the end of the string.

First, convert the string to lowercase.

Then use a regular expression to check whether a character is alphanumeric:

```js
let alphaNumericReg = /^[a-z0-9]$/
```

Now compare the characters using the two pointers.

* If `s[left]` is not alphanumeric, move `left` forward.
* Else if `s[right]` is not alphanumeric, move `right` backward.
* If both characters are alphanumeric, compare them.
* If they are equal, move both pointers toward the center.
* If they are different, return `false` immediately.

The loop continues until the two pointers meet or cross each other.

If we successfully reach the end without finding any mismatch, return `true`.

The important idea here is that **we don't need to actually remove the non-alphanumeric characters**. We can simply skip them while comparing the characters from both ends.

### Time and Space Complexity

#### Approach 1

**Time Complexity:** `O(n)`

We loop through the string once to filter the characters and create the reversed string.

**Space Complexity:** `O(n)`

We create `filteredStr` and `revStr`, both of which can grow up to the size of the input string.

#### Approach 2

**Time Complexity:** `O(n)`

The `left` and `right` pointers move toward each other, so each character is processed at most once.

**Space Complexity:** `O(1)`

Apart from a few variables and the regular expression, we don't create any additional data structure proportional to the input size.

### LeetCode Reference

* Problem Number: 125
* [Problem Link](https://leetcode.com/problems/valid-palindrome/description/)
