## Intersection of two Linked List.

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

### Brute Force Approch
We can loop through the headA linked list and check if each element is present in headB linkedlist or not by looping through headB as well.

This is not an optimized approach as the Time complexity of this is O(m*n)


### Hash Table

We can use a hash map or hash table to solve this. Because finding an element from hash map is faster than finiding an element in a linked list.
- We will create a hash table of headB linked list.
- Then we will check for each element of headB if they are present in hash table or not.
- If we found any element of headA in hash table then that is our intersection.
- Or else we will return null.

