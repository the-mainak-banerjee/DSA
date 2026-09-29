## Isomorphic Strings

Given two strings `s` and `t`, determine if they are **isomorphic**.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters.

No two characters may map to the same character, but a character may map to itself.

### Solution

The important thing to understand in this problem is that the mapping between the two strings needs to work in **both directions**.

For example:

```text
s = "egg"
t = "add"
```

The mapping is:

```text
e → a
g → d
```

This is valid because every occurrence of `e` maps to `a` and every occurrence of `g` maps to `d`.

But consider:

```text
s = "foo"
t = "bar"
```

Here:

```text
f → b
o → a
o → r
```

The same character `o` is trying to map to two different characters, so the strings are not isomorphic.

To handle this, we maintain **two maps**:

```js
let mapOfStoT = {}
let mapOfTtoS = {}
```

- `mapOfStoT` stores the mapping from characters of `s` to characters of `t`.
- `mapOfTtoS` stores the mapping from characters of `t` back to characters of `s`.

We need both maps because the problem says:

> **No two characters may map to the same character.**

#### Step 1: Create the mapping

Loop through both strings at the same time.

For every position `i`, we have:

```text
s[i] → t[i]
```

If neither character has been mapped yet:

```js
if(!mapOfStoT[s[i]] && !mapOfTtoS[t[i]])
```

we create the mapping in both directions:

```js
mapOfStoT[s[i]] = t[i]
mapOfTtoS[t[i]] = s[i]
```

For example:

```text
s = "egg"
t = "add"
```

After processing the first character:

```text
e → a
a → e
```

#### Step 2: Check the existing mappings

If the character has already been mapped, we need to make sure the mapping is still consistent.

First, check the mapping from `s` to `t`:

```js
else if(mapOfStoT[s[i]] !== t[i]){
    return false
}
```

If `s[i]` was previously mapped to a different character, the strings cannot be isomorphic.

We also check the reverse mapping:

```js
else if(mapOfTtoS[t[i]] !== s[i]){
    return false
}
```

This makes sure that two different characters from `s` don't map to the same character in `t`.

For example:

```text
s = "ab"
t = "cc"
```

The first mapping would be:

```text
a → c
c → a
```

When we reach `b → c`, `c` is already mapped to `a`.

Therefore:

```text
b → c
c → b
```

cannot be created, and we return `false`.

If we successfully process the entire string without finding an invalid mapping, we return `true`.

### Time and Space Complexity

**Time Complexity:** `O(n)`

We loop through the strings once, where `n` is the length of the strings.

**Space Complexity:** `O(1)`

We use two maps, but the number of possible characters is limited to a fixed character set. Therefore, the amount of additional space is bounded by a constant.

### LeetCode Reference

- Problem Number: 205
- [Problem Link](https://leetcode.com/problems/isomorphic-strings/)