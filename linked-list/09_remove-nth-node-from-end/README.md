## Remove Linked List Element.

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

### Solution
Whenever we need to delete something from a linked list we should think about two things
- A sentinal node to handle corner cases and keep track of the head.
- Found the `prev` node of the target node. Because the formula of deleting a node is `prev.next = prev.next.next`

Now to solve this problem we can follow 2 different approaches:

#### Approach one [Two pass]

In this approch we need to follow the below steps:

- Lets first calculate the length of the list by looping through the list once.
- Once we have the length we can calculate the position of the previous node of the target node from start by using the formula `length - n`.
- Then we can mainatin a `prev` pointer and make it points to the prev node, and then we can delete the target node by using the formula.

#### Approch two [One pass]

In this approch we need to maintain two pointers - `first`, `second`.

- The second pointer will points to the sentinal node at start and the first one points to the node which is placed after nth node from second pointer.
- Then we will keep moving each pointer one step at a time till the first pointer reaches the last node.
- At that point our second pointer will points to the prev node of our target node. Because we are maintaining a gap of `n` between both the nodes.
- Then again we can use our delete node formula `second.next = second.next.next`

In both the approach we need to retun `sentinal.next` as it is pointing towards head.

### Leet Code reference

- Problem Number 19
- [Problem Link](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)