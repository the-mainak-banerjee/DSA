## Evaluate Reverse Polish Notation

You are given an array of strings `tokens` that represents an arithmetic expression in **Reverse Polish Notation (RPN)**.

Evaluate the expression and return an integer representing the value of the expression.

The valid operators are:

- `+`
- `-`
- `*`
- `/`

The division between two integers always **truncates toward zero**.

### Solution

This problem can be solved using a **Stack**.

The important thing to understand about Reverse Polish Notation is that the **operator comes after its operands**.

For example, the normal expression:

```text
2 + 3
```

becomes:

```text
2 3 +
```

For a more complex expression:

```text
(2 + 3) * 4
```

the Reverse Polish Notation is:

```text
2 3 + 4 *
```

The stack helps us keep track of the operands until we encounter an operator.

### Step 1: Maintain a Stack

We create an empty stack:

```js
let stack = []
```

Then we loop through every token.

For every token, there are two possibilities:

- It is a number.
- It is an operator.

### Step 2: If the Token Is a Number

If the current token is not an operator, it is an operand.

We convert it into a number and push it into the stack:

```js
stack.push(parseInt(item))
```

For example, for:

```text
2 3
```

the stack becomes:

```text
[2, 3]
```

### Step 3: If the Token Is an Operator

When we encounter an operator, we need the **last two operands** from the stack.

So we pop two values:

```js
let b = stack.pop()
let a = stack.pop()
```

The order here is very important.

We first get `b` and then `a` because the expression is:

```text
a operator b
```

For example:

```text
5 2 -
```

The stack contains:

```text
[5, 2]
```

We get:

```text
b = 2
a = 5
```

So:

```text
a - b
5 - 2
```

gives:

```text
3
```

If we reversed them:

```text
2 - 5
```

we would get the wrong answer.

### Step 4: Perform the Operation

We can use a map to store the operations:

```js
let map = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b)
}
```

Once we get `a` and `b`, we perform the operation:

```js
let result = map[item](a, b)
```

Then push the result back into the stack:

```js
stack.push(result)
```

This result can then become an operand for the next operator.

### Example

Consider:

```text
tokens = ["2", "1", "+", "3", "*"]
```

This represents:

```text
(2 + 1) * 3
```

Process each token:

```text
2
```

```text
stack = [2]
```

Then:

```text
1
```

```text
stack = [2, 1]
```

Then we encounter `+`.

Pop two values:

```text
a = 2
b = 1
```

Calculate:

```text
2 + 1 = 3
```

Push the result:

```text
stack = [3]
```

Then:

```text
3
```

```text
stack = [3, 3]
```

Finally, we encounter `*`.

Pop:

```text
a = 3
b = 3
```

Calculate:

```text
3 * 3 = 9
```

Push the result:

```text
stack = [9]
```

At the end, the stack contains only the final result:

```js
return stack.pop()
```

So the answer is:

```text
9
```

### Why Does the Stack Work Here?

Reverse Polish Notation naturally works from **left to right**, and whenever we encounter an operator, we need the **two most recently available operands**.

A stack gives us exactly that:

> **The last two operands we encountered are at the top of the stack.**

After performing an operation, we push the result back onto the stack so it can be used as an operand for the next operation.

This is another example of a problem where the **LIFO behavior of a stack matches the required processing order**.

### Important Point: Division

The problem says that division must **truncate toward zero**.

So instead of using:

```js
Math.floor(a / b)
```

we use:

```js
Math.trunc(a / b)
```

The difference becomes important for negative numbers.

For example:

```text
Math.floor(-7 / 2) → -4
Math.trunc(-7 / 2) → -3
```

Since the problem requires truncation toward zero, `Math.trunc()` is the correct choice.

### Time and Space Complexity

**Time Complexity:** `O(n)`

We process every token exactly once.

Each token is either pushed into the stack or used in one arithmetic operation.

**Space Complexity:** `O(n)`

In the worst case, all tokens can be operands, so the stack can contain `O(n)` elements.

### LeetCode Reference

- Problem Number: 150
- [Problem Link](https://leetcode.com/problems/evaluate-reverse-polish-notation/)