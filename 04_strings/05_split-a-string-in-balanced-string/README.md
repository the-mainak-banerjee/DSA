# Split a String in Balanced Strings

Balanced strings are those that have an equal quantity of `'L'` and `'R'` characters.

Given a **balanced** string `s`, split it into some number of substrings such that:

* Each substring is balanced.

Return the **maximum** number of balanced strings you can obtain.

## Solution 1: Maintain Separate Counts

We can keep track of the number of `'L'` and `'R'` characters in the current substring.

* Maintain `lCount` to count the number of `'L'` characters.

* Maintain `rCount` to count the number of `'R'` characters.

* Loop through the string character by character.

* If the current character is `'R'`, increment `rCount`.

* Otherwise, increment `lCount`.

* Whenever `rCount === lCount`, the current substring is balanced.

* Increment `count` because we found one balanced substring.

* Reset `lCount` and `rCount` to `0` and start looking for the next balanced substring.


## Solution 2: Maintain a Balance

We can simplify the solution by maintaining only one variable, `balance`, instead of keeping separate counters for `'L'` and `'R'`.

* If the current character is `'R'`, increment `balance`.

* If the current character is `'L'`, decrement `balance`.

* When `balance === 0`, the number of `'R'` and `'L'` characters is equal, so the current substring is balanced.

* Increment `count` whenever `balance` becomes `0`.

### Why Does This Work?

Instead of tracking:

```text
rCount === lCount
```

we track the difference between them:

```text
balance = rCount - lCount
```

When:

```text
balance === 0
```

it means:

```text
rCount - lCount = 0
```

Therefore:

```text
rCount === lCount
```

and the current substring is balanced.

For example:

```text
R → balance = 1
L → balance = 0 → balanced

R → balance = 1
R → balance = 2
L → balance = 1
L → balance = 0 → balanced
```

Every time the balance becomes `0`, we have found one balanced substring.

### Why Don't We Need to Reset `balance`?

Once `balance` becomes `0`, the next character starts a new substring.

For example:

```text
RL | RRLL | RL
```

After processing `RL`:

```text
balance = 0
```

Then processing `RRLL` starts from that `0` balance and returns to `0` again.

So we don't need to explicitly reset the variable.

## Greedy Approach

The solution uses a **greedy approach**.

Whenever the current substring becomes balanced, we immediately split it instead of waiting for more characters.

For example:

```text
R L R R L L R L R L
    ↑
```

As soon as the balance becomes `0`, we have a valid balanced substring.

Making the split immediately gives us the maximum possible number of balanced substrings because extending an already-balanced substring would only combine it with characters that could form another balanced substring.

## Time and Space Complexity

### Time Complexity: `O(n)`

Where:

* `n` = length of the string.

We traverse the string exactly once.

Therefore:

```text
O(n)
```

### Space Complexity: `O(1)`

We only use a fixed number of variables such as `balance` and `count`, regardless of the size of the input.

Therefore:

```text
O(1)
```

## Key Takeaway

When two quantities need to be equal, we can sometimes track their **difference** instead of maintaining two separate counters.

Instead of:

```text
rCount === lCount
```

we can maintain:

```text
balance = rCount - lCount
```

and check:

```text
balance === 0
```

This **balance technique** is useful for many problems involving two opposing quantities, such as matching pairs, parentheses, or two types of characters.

## LeetCode Reference

* **Problem Number:** 1221

* **Problem:** [Split a String in Balanced Strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/)
