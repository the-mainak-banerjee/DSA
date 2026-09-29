## Merge two sorted list.

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one *sorted* list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

### Solution

This is one easy problem. We need to compare between each item of both the list and figure out the next smallest node.

- We will create one dummy node called `start` and also hold its reference to another node called `head`
- So we will compare between `list1.value` and `list2.value`, the smaller one will be added to `start.next`. Then we will move the smaller one to the next node [Like `list1 = list1.next` if list1 is smaller]. 
- And we will also move `start` to it's next node. [`start = start.next`]
- The loop will run till both `list1` and `list2` is truthy.
- At the outside of the loop `start.next` will points to wither `list1` or `list2` which one will be non null. 

At the end we will return `head.next`

### Leet Code reference

- Problem Number 21
- [Problem Link](https://leetcode.com/problems/merge-two-sorted-lists/description/)