## Linked List Cycle.

If the tail of the linked list points to another item of the linked list that means the list has a cycle.

There are two ways to solve this problem:

### Hash Table

- We will mainatin a hash table. In JS it can be a SET.
- We will loop through each item of the linked list by maintaining a `current` pointer and check if that item is present on the hash table or not.
    - If it is present then the list is a cycle so we will return true.
    - If it is not present then we will add that item in to the hash table.
- This loop will continue till `current` element becomes null. Because if the linked list is not a cycle then it's tail will points to null.


### Floyd's Algorithm

This algorithm says that if two people start running on a cyclic path with different speed then at some point in their journey they will meet again.

We will apply the same principle in our linked list.

- We will maintain two pointers:
    - `slow`: It will start from head and move one step at a time.
    - `fast`: It will start from `head.next` and move two step at a time.
- We will continue moving these points along our list.
    - If at some point `slow` and `fast` points to the same element then we can say our linked list has a cycle.
    - But if `fast` or `fast.next` points to `null` at some point, that means our linked list has no cycle. This is same as [Middle Of Linked List Problem](https://github.com/the-mainak-banerjee/DSA/tree/main/linked-list/middle-of-linked-list)
- We also need to handle a corner case. If there is no head then we need to return false.