## 503. Next Greater Element II

Given a circular integer array `nums`, return the **next greater number** for every element.

The **next greater number** of an element `x` is the first greater number encountered while traversing the array to the right. Since the array is circular, after reaching the last element, we continue from the first element.

If no greater element exists, return `-1`.

### Solution

This is an extension of the **Next Greater Element** pattern.

The main challenge is that the array is **circular**, so for an element near the end, we may need to search from the beginning of the array.

We can solve this using a **monotonic stack** while traversing the array from right to left.

#### Approach 1: Duplicate the Array

The simplest way to handle the circular nature is to duplicate the array:

```js
let arr = [...nums, ...nums]
```

Now the circular traversal is converted into a normal linear traversal.

We process this doubled array from right to left:

* Maintain a stack of possible next greater elements.
* If the current element is greater than or equal to the stack top, pop it because it cannot be the next greater element.
* Otherwise, the stack top is the next greater element.
* Push the current element into the stack.
* Finally, return only the first half of the result.


#### Approach 2: Optimized — Without Duplicating the Array

We don't actually need to create a second copy of the array.

Instead, we can **simulate the doubled array** by traversing from index `2n - 2` down to `0`.

Since the actual array has only `n` elements, we use:

```js
i % n
```

to map the virtual index back to the original array.

For example:

```text
nums = [1, 2, 1]

Virtual indexes:
0  1  2  3  4
1  2  1  1  2

i % n maps:
0 → 0
1 → 1
2 → 2
3 → 0
4 → 1
```

This gives us the same effect as traversing a duplicated array without actually creating one.

The important idea here is that we **simulate the circular traversal using `i % n` instead of actually duplicating the array**.

### Time and Space Complexity

#### Approach 1

* **Time:** `O(n)`
* **Space:** `O(n)` — duplicated array, result array, and stack.

Even though we traverse `2n` elements, `2n` is still `O(n)`.

#### Approach 2

* **Time:** `O(n)`
* **Space:** `O(n)` — result array and monotonic stack.

This approach is more space-efficient because we don't create a duplicated array.

### Mental Model

Whenever you see a **circular array + next greater element**, think:

> **Simulate traversing the array twice, but use `% n` to wrap around instead of duplicating the array.**

### LeetCode Reference

* Problem Number: 503
* [Problem Link](https://leetcode.com/problems/next-greater-element-ii/)
