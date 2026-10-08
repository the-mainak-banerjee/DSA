## 69. Sqrt(x)

Given a non-negative integer `x`, return the **square root of `x` rounded down to the nearest integer**.

The returned integer should also be non-negative.

We cannot use any built-in exponent function or operator such as:

```js
Math.pow(x, 0.5)
x ** 0.5
```

### Solution

We can use **Binary Search** to find the square root.

For example, if:

```text
x = 16
```

We need to find a number `n` such that:

```text
n * n = 16
```

If the square root is not a perfect square, we need to return the largest number whose square is smaller than `x`.

For example:

```text
x = 20

4 * 4 = 16
5 * 5 = 25

Answer = 4
```

#### Approach: Binary Search

For `x >= 2`, the square root will always be between:

```text
2 and x / 2
```

So we can perform binary search within this range.

At every step:

- Calculate `middle`.
- Calculate `middle * middle`.
- If it is smaller than `x`, we need to search on the right.
- If it is greater than `x`, we need to search on the left.
- If it is exactly equal to `x`, we found the square root.

The important part is what happens when the exact square root doesn't exist.

When the loop ends, `right` will be the **largest number whose square is smaller than `x`**, which is exactly the floor of the square root.


### Why return `right`?

Suppose:

```text
x = 20
```

During binary search, eventually we get:

```text
4 * 4 = 16  → smaller than 20
5 * 5 = 25  → greater than 20
```

So:

```text
right = 4
left = 5
```

The loop ends because `left > right`.

At this point, `right` is the largest possible number whose square is less than or equal to `x`.

Therefore:

```text
sqrt(20) = 4.472...
floor(sqrt(20)) = 4
```

So we return `right`.

### Time and Space Complexity

- **Time:** `O(log n)` — binary search reduces the search space by half each time.
- **Space:** `O(1)` — we only use a few variables.

### Mental Model

Whenever you need to find a number that satisfies a condition like:

```text
middle * middle <= x
```

and the possible values form a **sorted search space**, think about **Binary Search**.

Here, we are essentially searching for the **largest number whose square is less than or equal to `x`**.

### LeetCode Reference

- Problem Number: 69
- [Problem Link](https://leetcode.com/problems/sqrtx/)