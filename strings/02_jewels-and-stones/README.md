## Jewels and Stones

You're given strings `jewels` representing the types of `stones` that are jewels, and `stones` representing the stones you have. Each character in `stones` is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

### Solution

We need to check every stone and determine whether it exists in the `jewels` string.

There are two approaches we can use.

#### Approach 1: Using Nested Loops

In this approach, we compare every stone with every jewel.

Maintain a variable `count` to store the number of stones that are jewels.

* Run a loop through every character in `stones`.
* For each stone, run another loop through every character in `jewels`.
* Compare the current stone with the current jewel.
* If both characters are equal, increase `count` and break the inner loop because we already know that this stone is a jewel.

At the end, return `count`.

The important thing here is that for every stone, we may have to check all the jewels.

**Time Complexity:** `O(n × m)`

Where:

* `n` = length of `stones`
* `m` = length of `jewels`

**Space Complexity:** `O(1)`

We only use the `count` variable and don't create any additional data structure.

#### Approach 2: Using Set

Instead of checking every stone against every jewel, we can store all the jewels inside a `Set`.

A `Set` allows us to check whether a particular character exists using `set.has()`.

First, create a `Set` and add every character from `jewels` to it.

Then:

* Loop through every character in `stones`.
* Check if the current stone exists in the `Set` using `set.has()`.
* If it exists, increase `count`.
* Return `count` after checking all the stones.

Since `Set.has()` takes `O(1)` average time, we don't need to loop through all the jewels for every stone.

**Time Complexity:** `O(n + m)`

Where:

* `n` = length of `stones`
* `m` = length of `jewels`

We spend `O(m)` time creating the `Set` and `O(n)` time checking each stone.

**Space Complexity:** `O(1)`

Since `jewels` contains only English alphabet characters and is case-sensitive, the `Set` can contain at most 52 unique characters. This is a fixed amount of space, so the space complexity is `O(1)`.

### LeetCode Reference

* Problem Number: 771
* [Problem Link](https://leetcode.com/problems/jewels-and-stones/description/)
