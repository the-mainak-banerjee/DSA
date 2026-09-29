## Implement Stack using Queues

Implement a **last-in-first-out (LIFO)** stack using only queues.

The implemented stack should support all the functions of a normal stack:

* `push`
* `pop`
* `top`
* `empty`

The challenge here is that a **queue follows FIFO**, while a **stack follows LIFO**.

So we need to use the queue operations in such a way that we can get the **last inserted element first**.

There are two approaches.

---

### Approach 1: Using Two Queues

In this approach, we maintain two queues:

```js
this.q1 = []
this.q2 = []
```

We will mainly keep our stack elements inside `q1` and use `q2` temporarily whenever we need to access the last element.

#### `push`

For `push`, we can simply add the element to `q1`:

```js
this.q1.push(x)
```

This is because a queue allows us to add elements to the back.

For example:

```text
push(1)
push(2)
push(3)

q1:

Front → [1] [2] [3] ← Back
```

But our stack should behave like:

```text
Top → 3
       2
       1
```

So when we need to perform `pop` or `top`, we need to reach the last element of the queue.

#### `pop`

The last element of `q1` is the top of our simulated stack.

But a queue only allows us to remove from the front.

So we move all elements except the last one from `q1` to `q2`.

For example:

```text
q1:

Front → [1] [2] [3] ← Back
```

Move `1` and `2` to `q2`:

```text
q1: [3]

q2: [1] [2]
```

Now the front of `q1` is `3`, which is the top of our stack.

So we remove it:

```js
let result = this.q1.shift()
```

After that, we swap `q1` and `q2` so that the remaining elements are back in `q1`.

```text
q1 → [1] [2]
q2 → []
```

This allows us to continue using `q1` as our main queue.

#### `top`

`top` follows almost the same process as `pop`.

We move all elements except the last one from `q1` to `q2`.

The remaining element in `q1` is the top of the stack.

We store it:

```js
let result = this.q1.shift()
```

But unlike `pop`, we **cannot remove the element permanently**.

So we put it back into `q2`:

```js
this.q2.push(result)
```

Then swap the queues.

This restores the original elements while returning the top element.

#### `empty`

For `empty`, we simply check whether `q1` contains any elements:

```js
return this.q1.length === 0
```

---

### Approach 2: Using One Queue

We can simplify the previous approach and solve the problem using only **one queue**.

The idea is to rearrange the queue whenever we need to access the top element.

Suppose our queue contains:

```text
Front → [1] [2] [3] ← Back
```

We want `3`, because `3` is the top of our simulated stack.

Since we can only remove from the front, we can repeatedly:

1. Remove the front element.
2. Add it back to the rear.

So:

```text
[1] [2] [3]
```

After moving `1`:

```text
[2] [3] [1]
```

After moving `2`:

```text
[3] [1] [2]
```

Now `3` is at the front.

This effectively rotates the queue until the last inserted element reaches the front.

#### `push`

For `push`, simply add the element to the back:

```js
this.q.push(x)
```

#### `pop`

First, find the current size of the queue:

```js
let n = this.q.length
```

Then move the first `n - 1` elements from the front to the back:

```js
for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift())
}
```

Now the last inserted element is at the front.

We can remove and return it:

```js
return this.q.shift()
```

#### `top`

`top` works almost exactly like `pop`.

We again move the first `n - 1` elements to the back.

Now the last inserted element is at the front.

We remove it temporarily:

```js
let result = this.q.shift()
```

But because `top` should **not remove the element**, we immediately add it back:

```js
this.q.push(result)
```

Finally, return `result`.

#### `empty`

We simply check whether the queue contains any elements:

```js
return this.q.length === 0
```

---

## Why Does This Work?

The main problem is:

```text
Stack → LIFO
Queue → FIFO
```

A queue naturally gives us:

```text
First In → First Out
```

But we need:

```text
Last In → First Out
```

So we manipulate the queue to bring the **last inserted element to the front**.

Once that element reaches the front, the normal queue operation `shift()` can remove it.

The main mental model is:

> **We are not changing how the queue works. We are rearranging the queue so that its front behaves like the top of a stack.**

---

## Time and Space Complexity

### Approach 1: Two Queues

#### `push`

We simply add an element to the queue.

**Time:** `O(1)`

#### `pop`

We move `n - 1` elements from one queue to another.

**Time:** `O(n)`

#### `top`

We also move `n - 1` elements between the queues.

**Time:** `O(n)`

#### `empty`

We only check the length.

**Time:** `O(1)`

**Space Complexity:** `O(n)`

We use two queues that together store all the elements.

---

### Approach 2: One Queue

#### `push`

**Time:** `O(1)`

#### `pop`

We rotate `n - 1` elements.

**Time:** `O(n)`

#### `top`

We also rotate `n - 1` elements.

**Time:** `O(n)`

#### `empty`

**Time:** `O(1)`

**Space Complexity:** `O(n)`

We use one queue to store all the elements.

---

## Approach Comparison

| Feature     | Two Queues | One Queue |
| ----------- | ---------- | --------- |
| `push`      | `O(1)`     | `O(1)`    |
| `pop`       | `O(n)`     | `O(n)`    |
| `top`       | `O(n)`     | `O(n)`    |
| `empty`     | `O(1)`     | `O(1)`    |
| Extra queue | Yes        | No        |
| Space       | `O(n)`     | `O(n)`    |

The core idea in both approaches is the same:

> **Move the elements around until the last inserted element becomes accessible from the front of the queue.**

### LeetCode Reference

* Problem Number: 225
* [Problem Link](https://leetcode.com/problems/implement-stack-using-queues/)
