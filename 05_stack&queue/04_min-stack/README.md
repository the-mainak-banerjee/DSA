## Min Stack

Design a stack that supports `push`, `pop`, `top`, and retrieving the minimum element in **constant time**.

The important requirement of this problem is:

> Every operation, including `getMin()`, must have `O(1)` time complexity.

### Solution

A normal stack can easily give us the `top` element in `O(1)`.

The challenge is finding the **minimum element** in `O(1)`.

A simple approach would be to loop through the entire stack whenever `getMin()` is called, but that would take `O(n)` time.

So instead, we can store the **minimum value along with every element**.

Our stack will store each element in this format:

```text
[value, minimum]
```

For example, if we push:

```text
5
3
7
2
```

Our stack will look like:

```text
[5, 5]
[3, 3]
[7, 3]
[2, 2]
```

The second value represents the **minimum value in the stack up to that point**.

### `push`

When the stack is empty, the current value is automatically the minimum:

```js
if(this.s.length === 0){
    this.s.push([value, value])
}
```

For every other value, we compare the new value with the minimum value stored in the previous element:

```js
let minValue = Math.min(
    value,
    this.s[this.s.length - 1][1]
)
```

Then we store both values:

```js
this.s.push([value, minValue])
```

For example:

```text
push(5)

[5, 5]
```

Now:

```text
push(3)

[5, 5]
[3, 3]
```

The minimum is now `3`.

If we then push `7`:

```text
[5, 5]
[3, 3]
[7, 3]
```

The minimum is still `3`.

If we push `2`:

```text
[5, 5]
[3, 3]
[7, 3]
[2, 2]
```

The minimum becomes `2`.

### `pop`

For `pop`, we simply remove the top element:

```js
this.s.pop()
```

We don't need to manually update the minimum.

This is because the previous element already contains the minimum value for the stack before the removed element was added.

For example:

```text
Before pop:

[5, 5]
[3, 3]
[7, 3]
[2, 2]
```

After `pop()`:

```text
[5, 5]
[3, 3]
[7, 3]
```

The minimum automatically becomes `3`.

### `top`

The actual value of the top element is stored at index `0` of the pair:

```js
return this.s[this.s.length - 1][0]
```

For example:

```text
[7, 3]
 ↑
value
```

So `top()` returns `7`.

### `getMin`

The minimum value is stored at index `1` of the top pair:

```js
return this.s[this.s.length - 1][1]
```

For example:

```text
[7, 3]
    ↑
  minimum
```

So `getMin()` returns `3`.

### Why Does This Work?

The key idea is:

> **Don't calculate the minimum when `getMin()` is called. Calculate and store it when we push the element.**

Every element remembers what the minimum was when it was added.

For example:

```text
push(5)

[5, 5]
```

```text
push(3)

[5, 5]
[3, 3]
```

```text
push(7)

[5, 5]
[3, 3]
[7, 3]
```

```text
push(2)

[5, 5]
[3, 3]
[7, 3]
[2, 2]
```

So whenever we need the current minimum, we don't need to search the entire stack.

We can simply look at the minimum stored in the top element.

This is what allows `getMin()` to be `O(1)`.

### Mental Model

This problem is a good example of **storing extra information to make future operations faster**.

Instead of storing only:

```text
[value]
```

we store:

```text
[value, minimum_so_far]
```

So every stack element carries the information needed to answer `getMin()` immediately.

### Time and Space Complexity

| Operation | Time Complexity |
| --------- | --------------: |
| `push`    |          `O(1)` |
| `pop`     |          `O(1)` |
| `top`     |          `O(1)` |
| `getMin`  |          `O(1)` |

**Space Complexity:** `O(n)`

We store two values for every element in the stack, but this is still `O(n)` additional storage.

### LeetCode Reference

* Problem Number: 155
* [Problem Link](https://leetcode.com/problems/min-stack/)
