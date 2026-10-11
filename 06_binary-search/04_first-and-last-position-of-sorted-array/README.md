## 34. Find First and Last Position of Element in Sorted Array

Given an integer array `nums` sorted in non-decreasing order, find the starting and ending positions of a given `target`.

If the target does not exist in the array, return `[-1, -1]`.

The algorithm must run in **O(log n)** time.

### Solution

We can solve this problem using **Binary Search twice**.

Since the array is sorted, all occurrences of the target will be next to each other. Instead of searching for every occurrence, we can independently find the first and last positions.

### Approach 1: Find the First and Last Positions Using Boundary Search

The main idea is to perform two binary searches:

- **First binary search:** Find the first occurrence of the target.
- **Second binary search:** Find the last occurrence of the target.

#### Finding the First Occurrence

We initialize `l = 0` and `r = nums.length - 1`.

During binary search:

- If `nums[m] < target`, the target must be on the right. Set `l = m + 1`.
- Otherwise, set `r = m`.

Why do we move `r` to `m` when `nums[m] >= target`?

Because `m` could be the first occurrence of the target, or an earlier occurrence might exist on the left. We keep `m` within the search range and continue looking for the leftmost position.

When `l === r`, we have reached the first possible position where the target could exist. We check whether `nums[l] === target`. If it does, we store `l` as the starting position. Otherwise, the starting position remains `-1`.

#### Finding the Last Occurrence

We reset `l` and `r` and perform another binary search.

This time, we want to find the rightmost occurrence of the target.

- If `nums[m] > target`, the target must be on the left. Set `r = m - 1`.
- Otherwise, set `l = m`.

Why do we use `Math.ceil()` when calculating the middle?

```js
let m = l + Math.ceil((r - l) / 2)
```

When we update `l = m`, we need to avoid getting stuck when only two elements remain. Using the upper middle ensures that `m` moves toward the right side of the search range.

When `l === r`, we check whether `nums[l] === target`. If it does, we store `l` as the ending position.

Finally, we return both positions.

### Approach 2: Continue Searching After Finding the Target

Another approach is to use the standard binary search pattern with `l <= r`.

We perform two independent searches.

#### Finding the First Occurrence

- If `nums[m] < target`, search the right half by setting `l = m + 1`.
- If `nums[m] > target`, search the left half by setting `r = m - 1`.
- If `nums[m] === target`, store `m` as a possible first occurrence and continue searching to the left by setting `r = m - 1`.

We do not return immediately when we find the target because an earlier occurrence might exist.

Each time we find another occurrence, we update the stored index. When the search ends, the stored index contains the first occurrence, or `-1` if the target was not found.

#### Finding the Last Occurrence

We perform another binary search.

- If `nums[m] > target`, search the left half by setting `r = m - 1`.
- If `nums[m] < target`, search the right half by setting `l = m + 1`.
- If `nums[m] === target`, store `m` as a possible last occurrence and continue searching to the right by setting `l = m + 1`.

Again, we continue searching after finding the target because a later occurrence might exist.

When the search ends, the stored index contains the last occurrence, or `-1` if the target was not found.

### Time and Space Complexity

Both approaches have the same complexity:

- **Time:** `O(log n)` — each binary search takes logarithmic time, and we perform two searches.
- **Space:** `O(1)` — we use only a fixed number of variables.

### Mental Model

Whenever you need to find the first or last occurrence of an element in a sorted array, think about **Binary Search on Boundaries**.

The key difference between the two searches is what you do when you find the target:

- To find the **first occurrence**, keep searching to the left.
- To find the **last occurrence**, keep searching to the right.

Finding one occurrence is not enough. You must continue searching in the direction of the boundary you need.

### LeetCode Reference

- Problem Number: 34
- [Problem Link](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)