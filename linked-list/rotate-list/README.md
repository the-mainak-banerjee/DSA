## Rotate Linked List.

Given the `head` of a linked list, rotate the list to the right by `k` places.


### Solution

Let's say the length of the given list is `5` so if we rotate the list `5` times it will become the original list.

If the value of `k` is `7` we need to rotate the list `7` times. But rotating the list `5` times makes it same as original so we can avoid rotating the list for the `5` times and just rotate the list `2` times, this will give us the same result as rotating the list `7` times as `7=5+2`.

So we can have a variable called `rotateCount` which will be calculated by `rotateCount = k % length`

So if `k=7` and `length=5` then `rotateCount = 7%5 = 2` so we have to rotate the list `2` times.

But how to rotate? Here are the steps

- Find the `rotateCount-1` th node from the start as we need to points it to null. For this we can use the 2 pointers approach same as [Remove nth Node from last problem](https://github.com/the-mainak-banerjee/DSA/tree/main/linked-list/remove-nth-node-from-end)

- Then we need to run a loop and make the `rotateCount-1` th node points to `null`
- Make the last node points to `head`
- Make the `rotateCount`th node the `newHead` and return it.

#### Edge cases

If the length of the list is either 0 or 1 we can simply return the list.


### Leet Code reference

- Problem Number 61
- [Problem Link](https://leetcode.com/problems/rotate-list/description/)