## Group Anagrams

Given an array of strings `strs`, group the anagrams together.

You can return the answer in **any order**.

### Solution

The main idea behind this problem is to find a way to identify whether two strings are anagrams.

For example:

```text
"eat" → "tea" → "ate"
```

All three strings contain the same characters with the same frequency, so they should belong to the same group.

We can solve this using a **hash-based data structure** where we create a common key for all the anagrams.

There are two approaches.

#### Approach 1: Using Sorted Strings

In this approach, we can create a key by sorting the characters of every string.

For example:

```text
"eat" → "aet"
"tea" → "aet"
"ate" → "aet"
```

Since all anagrams produce the same sorted string, we can use this sorted string as the key in our map.

For every string:

1. Split the string into individual characters.
2. Sort the characters.
3. Join them back together to create the key.
4. Check if the key already exists in the map.
5. If it doesn't exist, create a new group.
6. If it already exists, add the current string to that group.

For example:

```js
let sortedStr = strs[i].split("").sort().join("")
```

Then we can use `sortedStr` as the key:

```js
map[sortedStr] = [strs[i]]
```

or add the string to an existing group:

```js
map[sortedStr].push(strs[i])
```

Finally, we return all the values from the map:

```js
return Object.values(map)
```

#### Approach 2: Using Character Frequency

Instead of sorting every string, we can create a **frequency signature** for every string.

Since the problem contains lowercase English letters, there are only `26` possible characters.

So for every string, we create an array of size `26`:

```js
let freqArr = Array(26).fill(0)
```

Each index represents a character:

```text
0 → a
1 → b
2 → c
...
25 → z
```

We then loop through the string and increase the frequency of each character.

To find the correct index for a character, we can use its character code:

```js
let index = s[j].charCodeAt(0) - "a".charCodeAt(0)
```

For example:

```text
'a'.charCodeAt(0) - 'a'.charCodeAt(0) = 0
'b'.charCodeAt(0) - 'a'.charCodeAt(0) = 1
'c'.charCodeAt(0) - 'a'.charCodeAt(0) = 2
```

So for:

```text
"eat"
```

the frequency array represents:

```text
a → 1
e → 1
t → 1
```

We then convert this frequency array into a string to create a unique key:

```js
let key = ""

for(let k = 0; k < 26; k++){
    key += "#" + freqArr[k]
}
```

The `#` is used to separate the numbers so that different frequency combinations don't accidentally produce the same key.

For example, two anagrams will always produce the exact same frequency key because they contain the same characters with the same frequencies.

We can then use this key in our map:

```js
if(!map[key]){
    map[key] = [s]
}else{
    map[key].push(s)
}
```

Finally:

```js
return Object.values(map)
```

returns all the groups of anagrams.

### Why Does the Frequency Approach Work?

Anagrams have the same characters with the same frequencies.

For example:

```text
"eat"
"tea"
"ate"
```

All three have:

```text
a → 1
e → 1
t → 1
```

Therefore, their frequency arrays are identical, which means they produce the same key.

```text
eat → same frequency key
tea → same frequency key
ate → same frequency key
```

This allows us to use the key to group all anagrams together.

### Time and Space Complexity

Let:

* `n` = number of strings.
* `k` = average length of each string.

#### Approach 1: Sorting

For every string, we sort its characters.

Sorting a string of length `k` takes `O(k log k)` time.

Therefore:

**Time Complexity:** `O(n × k log k)`

**Space Complexity:** `O(n × k)`

The map stores all the strings, and we also create sorted strings while generating the keys.

#### Approach 2: Character Frequency

For every string, we loop through its characters to calculate the frequency.

That takes `O(k)` time per string.

We then loop through the fixed `26` character positions to create the key. Since `26` is constant, this is `O(1)`.

Therefore:

**Time Complexity:** `O(n × k)`

**Space Complexity:** `O(n × k)`

The map stores all the strings in the resulting groups. The frequency array itself is only of size `26`, so its additional space is `O(1)`.

### LeetCode Reference

* Problem Number: 49
* [Problem Link](https://leetcode.com/problems/group-anagrams/)
