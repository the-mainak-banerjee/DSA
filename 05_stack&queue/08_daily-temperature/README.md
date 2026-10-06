## Daily Temperatures

Given an array of integers `temperatures` representing the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `ith` day to get a warmer temperature.

If there is no future day for which this is possible, keep `answer[i] == 0`.

### Solution

This problem is another example of the **Next Greater Element** pattern.

For every day, we need to find the **next day to the right that has a higher temperature**.

A brute-force approach would be to start from every day and keep checking all the following days until we find a warmer temperature. But this can take `O(n²)` time.

Instead, we can use a **monotonic stack**.

The important thing to notice is that we don't actually need to store the temperatures in the stack. We need to know the **index of the day**, because the answer asks for the number of days we need to wait.

So our stack will store indices.

```js id="2p8z7d"
let stack = []
let ans = Array(n).fill(0)
```

We also initialize the answer with `0`.

This is useful because if we don't find a warmer day, the answer should remain `0`.

### Step 1: Start From the Right

Since we are looking for a warmer temperature **in the future**, we can process the array from right to left.

We start by pushing the last index:

```js id="6w3b8p"
stack.push(n - 1)
```

There is no day after the last day, so its answer will remain `0`.

### Step 2: Compare the Current Temperature with the Stack

Now we move from the second-last day toward the beginning:

```js id="w2u6r1"
for(let i = n - 2; i >= 0; i--)
```

For every day, we look at the index stored at the top of the stack:

```js id="8s5c2k"
let top = stack[stack.length - 1]
```

Then compare:

```js id="j6j7rq"
temperatures[i] >= temperatures[top]
```

There are two cases.

#### Case 1: Current Temperature Is Greater Than or Equal to the Stack Temperature

If:

```text id="aqa5p4"
temperatures[i] >= temperatures[top]
```

then the day at `top` cannot be the answer for the current day.

For example:

```text id="r6o5cw"
Current temperature = 75
Stack top temperature = 71
```

Since `75` is already warmer than `71`, we don't need `71` as a candidate.

So we remove it:

```js id="v8c3bp"
stack.pop()
```

We keep doing this until either:

* The stack becomes empty, or
* We find a day with a warmer temperature.

### Case 2: Stack Temperature Is Warmer

If:

```text id="1l2u5h"
temperatures[i] < temperatures[top]
```

then the day at `top` is the **next warmer day** for the current day.

We can calculate how many days we need to wait:

```js id="3yy8xm"
ans[i] = top - i
```

For example:

```text id="b6r9ph"
Current index = 2
Next warmer index = 5
```

So:

```text id="k8b6o6"
5 - 2 = 3
```

We need to wait `3` days.

Once we find this day, we can stop looking for the current day:

```js id="0f8y2e"
break
```

### Step 3: Add the Current Day to the Stack

After finding the answer for the current day, we push its index into the stack:

```js id="q5d4u1"
stack.push(i)
```

The current day can now potentially be the next warmer day for days further to the left.

### Example

Consider:

```text id="9c6z9x"
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
```

We process from right to left.

For `73` at the last index, there is no future day:

```text id="r2j8p7"
73 → 0
```

For `76`, there is no warmer temperature:

```text id="a5t1ku"
76 → 0
```

For `72`, the next warmer temperature is `76`, which is `1` day away:

```text id="d9v4nz"
72 → 1
```

For `69`, the next warmer temperature is `72`, which is `1` day away:

```text id="q8r3cx"
69 → 1
```

Continuing this process gives:

```text id="3g8z4m"
[1, 1, 4, 2, 1, 1, 0, 0]
```

### Why Does the Stack Work?

The stack maintains indices of days that can still potentially be the **next warmer day** for elements to their left.

When we find a temperature that is greater than or equal to a temperature at the top of the stack, that stack element becomes useless for the current day and every day further to the left that is looking for a warmer temperature through the same path.

So we remove it.

This is why this is called a **monotonic stack**.

The stack keeps only useful candidates for future comparisons.

### Mental Model

Whenever you see a problem asking:

* Next greater element
* Next warmer temperature
* Next smaller element
* First greater element to the right/left

think:

> **Can I use a monotonic stack?**

The general pattern is:

```text id="y4d6q2"
Process the array
       ↓
Maintain a stack of useful candidates
       ↓
Remove candidates that can no longer be useful
       ↓
The stack top gives the next possible answer
```

### Time and Space Complexity

**Time Complexity:** `O(n)`

Although there is a `while` loop inside the `for` loop, every index is pushed into the stack once and popped from the stack at most once.

Therefore, the total work is `O(n)`.

**Space Complexity:** `O(n)`

In the worst case, all indices can be stored in the stack.

The `answer` array also contains `n` elements, but it is the required output.

### LeetCode Reference

* Problem Number: 739
* [Problem Link](https://leetcode.com/problems/daily-temperatures/)
