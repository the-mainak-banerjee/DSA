## Remove Duplicates From Sorted List.

Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

### Solution
To solve this we need to maintain a `curr` pointer and loop through the list.

We need to compare between the current value and the value of `curr.next`

- If the are equal we will remove the next element of currnet by using the formula `curr.next = curr.next.next`
- Otherwise we will shift our current to next element.

### Leet Code reference

- Problem Number 83
- [Problem Link](https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/)