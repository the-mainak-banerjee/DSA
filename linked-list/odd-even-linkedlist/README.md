## Odd even linked list.

Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

### Solution

To solve this we need to maintain three pointers `odd`, `even` and `evenStart`
- `odd = head`
- `even = head.next`
- `evenStart = head.next`

Now we just need to follow these steps

- Move the next pointer of odd to `odd.next.next`
- Move the next pointer of even to `even.next.next`
- Then move both the `even` and `odd` to its `.next` node.
- This loop will run till `odd.next` and `even.next` is truthy.

Outside the loop we will make the `odd.next` points to `evenStart`.

We need to handle two corner case for 0 and 1 size of the linked list, in those cases we will directly return the head.


### Leet Code reference

- Problem Number 328
- [Problem Link](https://leetcode.com/problems/odd-even-linked-list/description/)