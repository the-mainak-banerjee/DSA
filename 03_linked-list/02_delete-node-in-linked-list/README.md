## Delete Node in a Linked List

There is a singly-linked list `head` and we want to delete a node `node` in it.

You are given the node to be deleted `node`. You will not be given access to the first node of `head`.

All the values of the linked list are unique, and it is guaranteed that the given node `node` is not the last node in the linked list.

### Solution

Usually, to delete a node from a linked list, we can keep a `prev` pointer. Once we reach the node we want to delete, we can skip it by setting:

```javascript
prev.next = prev.next.next;
```

This makes the previous node point directly to the node after the one being deleted.

But to make this work, we need a reference to the `head`; otherwise, we cannot traverse the list to access the `prev` node.

In this problem we don't have access to the `head` and also it is mentioned that the given node `node` is not the last node and all the values are unique.

So we can safely follow this approach:

- We will change the value of the given `node` to the value of its next node.
- Then, we will remove the next node by updating the `next` pointer of the given node to point to its next node's next node.

### Leet Code reference

- Problem Number 237  
- [Problem Link](https://leetcode.com/problems/delete-node-in-a-linked-list/description/)