## 278. First Bad Version

You are a product manager developing a product with `n` versions, numbered from `1` to `n`.

One version fails the quality check. Every version after it also fails because each version is built on the previous one.

Our task is to find the **first bad version** while minimizing the number of calls to the `isBadVersion(version)` API.

The API returns:

- `true`: The version is bad.
- `false`: The version is good.

### Solution

#### Approach: Binary Search

We can solve this problem using **Binary Search** because the versions follow a predictable pattern:

```text
Versions:  1  2  3  4  5  6  7  8
Status:    G  G  G  B  B  B  B  B
```

Once a version is bad, every version after it is also bad.

Instead of checking every version one by one, we check the middle version and eliminate half of the search space.

We maintain two pointers:

- `l`: The earliest possible first bad version.
- `r`: The latest possible first bad version.

At every iteration:

1. Calculate the middle version `m`.
2. Call `isBadVersion(m)` to check its status.
3. If the middle version is bad, the first bad version must be at `m` or somewhere before it. So, set `r = m`.
4. If the middle version is good, the first bad version must be after it. So, set `l = m + 1`.
5. Repeat until `l === r`.

When both pointers meet, we have found the first bad version.

### Why do we use `r = m` instead of `r = m - 1`?

This is the key difference between this problem and ordinary binary search.

If `isBadVersion(m)` returns `true`, then `m` itself could be the first bad version.

For example:

```text
Versions:  1  2  3  4  5  6  7  8
Status:    G  G  G  B  B  B  B  B
                     ↑
                     m
```

Since version `4` is bad, we cannot eliminate it. The first bad version could be `4`, so we update:

```js
r = m;
```

If we used `r = m - 1`, we could accidentally skip the correct answer.

On the other hand, if `m` is good, we know the first bad version must be strictly after it. Therefore, we use:

```js
l = m + 1;
```

### Why is the loop condition `l < r`?

We are searching for a boundary rather than an exact value that may or may not exist.

When `l === r`, only one candidate remains, so we have found the first bad version.

We don't need `l <= r` because we never need to search beyond the point where the two pointers meet.

### Time and Space Complexity

- **Time:** `O(log n)` — each API call eliminates approximately half of the remaining search space.
- **Space:** `O(1)` — we only use a few variables.

### Mental Model

Whenever a condition changes from `false` to `true` in a sorted range, think about **Binary Search on a boundary**.

For this problem:

- Good versions are `false`.
- Bad versions are `true`.
- We need to find the first version where the condition becomes `true`.

Remember: **When the middle element could be the answer, keep it in the search space.**

### LeetCode Reference

- Problem Number: 278
- [Problem Link](https://leetcode.com/problems/first-bad-version/)