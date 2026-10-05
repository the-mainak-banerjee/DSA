## Next Greater Element I

Given two distinct 0-indexed integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`.

For each element in `nums1`, find its corresponding position in `nums2` and determine the **next greater element to its right** in `nums2`.

If there is no greater element, return `-1`.

### Solution

This problem can be solved using a **Stack** and a **hash-based data structure**.

The main idea is to process `nums2` from **right to left**.

Why from right to left?

Because we are looking for the **next greater element to the right**. When we process an element, all the elements that could potentially be its next greater element should already be available in the stack.

For example:

```text
nums2 = [1, 3, 4, 2]
```

For `1`, the next greater element is `3`.

For `3`, the next greater element is `4`.

For `4`, there is no greater element to its right, so the answer is `-1`.

We maintain:

```js id="u4ddqy"
let map = {}
let stack = []
```

- `stack` helps us find the next greater element.
- `map` stores the answer for every element in `nums2`.

### Step 1: Start from the Right

We start with the last element of `nums2`.

There is nothing to its right, so its next greater element is automatically `-1`.

```js id="r6m1qt"
map[a2[n - 1]] = -1
stack.push(a2[n - 1])
```

For:

```text id="xg8zsi"
nums2 = [1, 3, 4, 2]
```

we start with:

```text id="q2t1dg"
map[2] = -1

stack:
[2]
```

### Step 2: Find the Next Greater Element

Now we move from right to left.

For every element, we compare it with the element at the top of the stack.

```js id="7f3xir"
let top = stack[stack.length - 1]
```

There are two possibilities.

#### Case 1: Current Element Is Greater Than the Stack Top

If:

```js id="8kyk1a"
a2[i] > top
```

then the stack top cannot be the next greater element for the current element.

Why?

Because the current element itself is greater than the stack top.

So we remove that element:

```js id="j5m8nq"
stack.pop()
```

We continue doing this until we find an element greater than the current element.

For example:

```text id="m4g7v8"
Current = 4

stack:
[2]
```

Since:

```text id="3i6rjc"
4 > 2
```

`2` cannot be the answer, so we remove it.

Now the stack is empty, meaning there is no greater element to the right.

So:

```text id="2ry6xm"
map[4] = -1
```

### Case 2: Stack Top Is Greater Than the Current Element

If:

```text id="7o7h83"
current < stack top
```

then the stack top is the next greater element.

So we store it:

```js id="0n1hqd"
map[a2[i]] = top
```

For example:

```text id="3q0j3m"
Current = 3

stack:
[4]
```

Since `4` is greater than `3`, we know:

```text id="p5q9fd"
3 → 4
```

So:

```js id="yofm3c"
map[3] = 4
```

We then stop looking for this element.

### Why Do We Remove Smaller Elements?

This is the key idea behind the **monotonic stack** approach.

Suppose we have:

```text id="q2b0dn"
Current = 1

stack:
[4, 2]
```

The top is `2`, so `2` is already greater than `1`.

Therefore, `2` is the next greater element for `1`.

We don't care about `4`, because `2` appears closer to `1`.

But when we encounter a larger current value:

```text id="7b6axq"
Current = 3

stack:
[4, 2]
```

`2` cannot be the answer because:

```text id="2v8y8j"
3 > 2
```

So we remove `2`.

Now `4` becomes the top:

```text id="a4s4k5"
stack:
[4]
```

Since `4 > 3`, we have found the next greater element.

This is why the stack allows us to efficiently skip elements that can never be answers.

### Step 3: Store Every Element in the Stack

After finding the answer for the current element, we push the current element into the stack:

```js id="5rj4vl"
stack.push(a2[i])
```

This allows the current element to become a potential next greater element for elements further to the left.

### Step 4: Create the Final Result

Once we have processed the entire `nums2`, the `map` contains the next greater element for every value.

Now we can simply map over `nums1`:

```js id="4p8q3h"
return a1.map(item => map[item])
```

Because `nums1` is a subset of `nums2`, every value in `nums1` will already have an answer stored in the map.

### Example

Consider:

```text id="e0b5sl"
nums1 = [4, 1, 2]
nums2 = [1, 3, 4, 2]
```

Processing `nums2` from right to left:

```text id="g5h2fq"
2 → -1
4 → -1
3 → 4
1 → 3
```

So our map becomes:

```text id="a9e2k8"
{
    1: 3,
    3: 4,
    4: -1,
    2: -1
}
```

Now process `nums1`:

```text id="v9l7w3"
4 → -1
1 → 3
2 → -1
```

Final result:

```text id="h5tq9x"
[-1, 3, -1]
```

### Mental Model

Whenever a problem asks for:

> **Next greater/smaller element to the left or right**

think about using a **monotonic stack**.

The stack allows us to remove elements that can no longer be useful as answers.

Instead of checking every element to the right for every element, we process the array once and maintain only the elements that can potentially become the next greater element.

### Time and Space Complexity

**Time Complexity:** `O(n + m)`

Let:

- `n` = length of `nums2`
- `m` = length of `nums1`

Although there is a `while` loop inside the `for` loop, every element is pushed into the stack once and popped at most once.

Therefore, processing `nums2` takes `O(n)` time.

Mapping `nums1` takes `O(m)` time.

So the overall complexity is:

**`O(n + m)`**

**Space Complexity:** `O(n)`

The stack can contain up to `n` elements, and the map can also contain up to `n` elements.

Therefore, the additional space is `O(n)`.

### LeetCode Reference

- Problem Number: 496
- [Problem Link](https://leetcode.com/problems/next-greater-element-i/)