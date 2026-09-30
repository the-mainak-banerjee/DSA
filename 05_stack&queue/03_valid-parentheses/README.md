## Valid Parentheses

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Solution

This problem is a good example of where we can use a **Stack**.

The important thing to understand is that the brackets must be closed in the **reverse order** in which they were opened.

For example:

```text
( [ { } ] )
```

The first bracket we open is `(`, but the first bracket we need to close is `{`.

This follows the **LIFO (Last In, First Out)** principle, which is exactly how a stack works.

We can also maintain a map that tells us which closing bracket belongs to each opening bracket:

```js
let map = {
    "(": ")",
    "{": "}",
    "[": "]"
}
```

### Step 1: Loop through the string

We loop through every character of the string.

For every character, there are two possibilities:

* It is an **opening bracket**.
* It is a **closing bracket**.

### Step 2: Handle Opening Brackets

If the current character exists as a key in our `map`, it means it is an opening bracket.

So we push it into the stack:

```js
if(map[s[i]]){
    stack.push(s[i])
}
```

For example:

```text
s = "({["

stack:

[
[
(
```

The most recently opened bracket is always at the top of the stack.

### Step 3: Handle Closing Brackets

If the current character is not an opening bracket, it must be a closing bracket.

We need to check whether it correctly closes the most recently opened bracket.

So we remove the top element from the stack:

```js
let top = stack.pop()
```

There are two things we need to check.

#### Case 1: There is no opening bracket

If `top` doesn't exist:

```js
if(!top)
```

it means we found a closing bracket without a corresponding opening bracket.

For example:

```text
")"
```

There is nothing in the stack to match it with, so we return `false`.

#### Case 2: The brackets don't match

We can use our map to find which closing bracket belongs to the opening bracket:

```js
map[top]
```

Then compare it with the current closing bracket:

```js
map[top] !== s[i]
```

If they don't match, return `false`.

For example:

```text
stack top = "("
current = "]"
```

Our map says:

```text
( → )
```

But the current bracket is `]`, so the brackets don't match.

Therefore, we return `false`.

### Step 4: Check the Stack at the End

After processing the entire string, we need to make sure there are no unmatched opening brackets left.

```js
return stack.length === 0
```

For example:

```text
s = "((("
```

After processing:

```text
stack:

(
(
(
```

The stack is not empty, so the string is invalid.

But for:

```text
s = "({[]})"
```

all opening brackets are eventually removed from the stack, so:

```text
stack.length === 0
```

and we return `true`.

### Mental Model

Whenever you see a problem involving:

* Matching brackets
* Nested structures
* Opening and closing pairs
* Processing things in reverse order

think about:

> **Can a Stack help me remember the things that are currently open?**

The most recently opened bracket must be the first one to be closed, which makes this a natural **LIFO** problem.

### Time and Space Complexity

**Time Complexity:** `O(n)`

We loop through the string once, and each character is pushed into or popped from the stack at most once.

**Space Complexity:** `O(n)`

In the worst case, the string can contain only opening brackets, so all `n` characters can be stored in the stack.

### LeetCode Reference

* Problem Number: 20
* [Problem Link](https://leetcode.com/problems/valid-parentheses/)
