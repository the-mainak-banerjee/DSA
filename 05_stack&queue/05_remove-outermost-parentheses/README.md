## Remove Outermost Parentheses

A valid parentheses string is either empty `""`, `"(" + A + ")"`, or `A + B`, where `A` and `B` are valid parentheses strings.

A valid parentheses string `s` is **primitive** if it is nonempty and cannot be split into two nonempty valid parentheses strings.

Given a valid parentheses string `s`, we need to remove the **outermost parentheses of every primitive string** in its primitive decomposition.

### Solution

The important thing to understand is how we identify the **outermost parentheses** of every primitive group.

For example:

```text
"(()())(())"
```

The primitive groups are:

```text
"(()())" + "(())"
```

After removing the outermost parentheses:

```text
"()()" + "()"
```

So the result is:

```text
"()()()"
```

We can solve this using two approaches.

---

### Approach 1: Using a Stack

In this approach, we maintain a stack to keep track of the currently open parentheses.

```js
let stack = []
let result = ""
```

Whenever we see an opening parenthesis `(`, we push it into the stack.

The important part is that we only add the `(` to the result if there is already something in the stack.

```js
if(s[i] === "("){
    stack.push(s[i])

    if(stack.length > 1){
        result += s[i]
    }
}
```

Why `stack.length > 1`?

Because when the first `(` of a primitive group is encountered, the stack is empty.

After pushing it:

```text
stack = ["("]
length = 1
```

This is the **outermost opening parenthesis**, so we don't add it to the result.

For the next `(`:

```text
stack = ["(", "("]
length = 2
```

Now it is an inner parenthesis, so we add it to the result.

For a closing parenthesis `)`:

```js
if(stack.length > 1){
    result += s[i]
}

stack.pop()
```

Again, if the stack has more than one element, this closing parenthesis is an inner parenthesis, so we add it.

If the stack has only one element, this `)` closes the outermost `(`, so we don't add it.

---

### Approach 2: Using a Level Counter

We don't actually need a complete stack here.

We only need to know **how deeply nested we currently are**.

So instead of storing every opening parenthesis, we can maintain a `level` variable:

```js
let level = 0
let result = ""
```

For every `(`, we increase the level:

```js
level++
```

For every `)`, we decrease the level:

```js
level--
```

The important observation is:

> **The outermost opening parenthesis is encountered when the current level is `0`, and the outermost closing parenthesis is encountered when the current level is `1`.**

So we only add a parenthesis to the result when the level is greater than `1`.

For an opening parenthesis:

```js
if (s[i] === "(") {
    level++
    result = level > 1 ? result + s[i] : result
}
```

First we increase the `level`.

If the new level is greater than `1`, it means this is an inner parenthesis, so we add it to the result.

For a closing parenthesis:

```js
else {
    result = level > 1 ? result + s[i] : result
    level--
}
```

Here we check the current level **before decreasing it**.

If `level > 1`, the closing parenthesis belongs to an inner level, so we add it.

If `level === 1`, it is the closing parenthesis of the primitive's outermost pair, so we don't add it.

### Example

For:

```text
"(()())"
```

We process it like this:

```text
Character    Level       Action
   (           1         Don't add
   (           2         Add
   )           2         Add
   (           2         Add
   )           2         Add
   )           1         Don't add
```

Result:

```text
"()()"
```

### Why Can We Replace the Stack with a Counter?

In the first approach, we only use the stack to answer one question:

> **How many opening parentheses are currently active?**

We don't actually need to know what each element in the stack is because every element is simply `(`.

Therefore, instead of storing:

```text
["(", "(", "("]
```

we can simply store:

```text
level = 3
```

This makes the second approach simpler.

### Time and Space Complexity

#### Approach 1: Using Stack

**Time Complexity:** `O(n)`

We process every character exactly once.

**Space Complexity:** `O(n)`

In the worst case, all characters can be opening parentheses, so the stack can contain `O(n)` elements.

#### Approach 2: Using Level Counter

**Time Complexity:** `O(n)`

We process every character exactly once.

**Space Complexity:** `O(n)`

The `level` variable itself requires `O(1)` auxiliary space. However, the `result` string can contain up to `O(n)` characters.

If we consider only **auxiliary space excluding the output**, the space complexity is:

**`O(1)`**

### Important Mental Model

When dealing with nested parentheses, think about the **current depth/level**.

```text
level = 0
    (
level = 1
    (
level = 2
    )
level = 1
    )
level = 0
```

The transition:

```text
0 → 1
```

means we are entering the outermost level.

And:

```text
1 → 0
```

means we are leaving the outermost level.

Everything between those two points belongs to the inside of the primitive group.

### LeetCode Reference

* Problem Number: 1021
* [Problem Link](https://leetcode.com/problems/remove-outermost-parentheses/)
