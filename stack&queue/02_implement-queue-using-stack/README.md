## Implement Queue using Stacks

Implement a **first-in-first-out (FIFO)** queue using only two stacks.

The implemented queue should support:

* `push`
* `pop`
* `peek`
* `empty`

The challenge here is that a **queue follows FIFO**, while a **stack follows LIFO**.

So we need to use two stacks in a way that allows us to get the **first inserted element first**.

### Solution

We maintain two stacks:

```js
this.s1 = []
this.s2 = []
```

We can think about them as having two different responsibilities:

* `s1` — used to add new elements.
* `s2` — used to remove and access elements from the front of the queue.

The important idea is that when we move elements from `s1` to `s2`, their order gets reversed.

For example, if we push:

```text
1 → 2 → 3
```

` s1` looks like:

```text
TOP
 ↓
[3]
[2]
[1]
```

When we move everything to `s2`:

```text
[1]
[2]
[3]
 ↑
TOP
```

Now `1`, which was the **first element inserted**, is at the top of `s2`.

This gives us the FIFO behavior we need.

### `push`

For `push`, we simply add the element to `s1`:

```js
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
}
```

For example:

```text
push(1)
push(2)
push(3)

s1:

TOP
 ↓
[3]
[2]
[1]
```

We don't need to move anything during `push`.

### `pop`

For `pop`, we need to remove the **first element inserted**.

If `s2` is empty, we move all elements from `s1` to `s2`:

```js
if(this.s2.length === 0){
    while(this.s1.length){
        this.s2.push(this.s1.pop())
    }
}
```

Suppose:

```text
s1:

TOP
 ↓
[3]
[2]
[1]
```

After moving everything:

```text
s2:

TOP
 ↓
[1]
[2]
[3]
```

Now the first element of the queue, `1`, is at the top of `s2`.

So we can simply:

```js
return this.s2.pop()
```

### Important Point

We **don't move elements from `s1` to `s2` every time**.

We only do it when `s2` is empty.

For example:

```text
push(1)
push(2)
push(3)

        ↓

s1 = [3, 2, 1]
s2 = []
```

Move them once:

```text
s1 = []
s2 = [1, 2, 3]
```

Now we can keep popping directly from `s2`:

```text
pop() → 1
pop() → 2
pop() → 3
```

We only need to move elements again when `s2` becomes empty and new elements are present in `s1`.

This is the key idea behind this approach.

### `peek`

`peek` is almost the same as `pop`.

We first make sure that `s2` contains the elements in the correct order:

```js
if(this.s2.length === 0){
    while(this.s1.length){
        this.s2.push(this.s1.pop())
    }
}
```

The difference is that we **don't remove the element**.

Instead, we look at the top element of `s2`:

```js
return this.s2[this.s2.length - 1]
```

So `peek` gives us the front of the queue without removing it.

### `empty`

The queue is empty only when **both stacks are empty**.

```js
return this.s1.length === 0 && this.s2.length === 0
```

We need to check both because elements can exist in either stack.

For example:

```text
s1 = [4, 5]
s2 = []
```

The queue is obviously not empty, even though `s2` is empty.

### Why Does This Work?

The main problem is:

```text
Stack → LIFO
Queue → FIFO
```

A single stack gives us:

```text
Last In → First Out
```

But we need:

```text
First In → First Out
```

Using two stacks allows us to **reverse the order twice**.

First:

```text
Queue order:

1 → 2 → 3
```

When stored in `s1`, the top is:

```text
3
2
1
```

Moving everything from `s1` to `s2` reverses the order:

```text
1
2
3
```

Now `1` is at the top of `s2`, so we can remove it first.

The important mental model is:

> **One stack reverses the order. Using a second stack reverses it again, giving us the original FIFO order at the top of `s2`.**

### Time and Space Complexity

#### `push`

We simply add the element to `s1`.

**Time:** `O(1)`

#### `pop`

There are two cases.

If `s2` already contains elements, we simply remove from it:

**Time:** `O(1)`

If `s2` is empty, we move all elements from `s1` to `s2`, which takes `O(n)` time.

So the **worst-case time complexity** of a single `pop` is:

**`O(n)`**

However, each element is moved from `s1` to `s2` only once before being removed, so the **amortized time complexity** of `pop` is `O(1)`.

#### `peek`

The same logic applies to `peek`.

**Worst-case:** `O(n)`

**Amortized:** `O(1)`

#### `empty`

We only check the length of both stacks.

**Time:** `O(1)`

### Space Complexity

**Space Complexity:** `O(n)`

Together, `s1` and `s2` contain all the elements currently present in the queue.

### LeetCode Reference

* Problem Number: 232
* [Problem Link](https://leetcode.com/problems/implement-queue-using-stacks/)
