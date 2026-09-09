## Remove Linked List Element.

Given the head of a linked list and an integer `val`, remove all the nodes of the linked list that has Node.`val == val`, and return the new head.

- To solve this problem we need to keep a track of the previous element by using a `prev` pointer.
- Then we need to check if the next of the `prev` points to the element which we need to remove.
- If yes then we will make the next of the `prev` points to `prev.next.next`.


This whole approch will work absolutely fine if the `val` is in the middle.

But if the `val` node is the head note than this will not work as there is no previous node of head.

To handle this we need to create and maintain a new node, which will be called `Sentinel Node`.

- The next of the `Sentinel Node` points to the head and we will make  `prev = sentinel node` at the start.
- Now when the loop start `prev.next` will refer to the first node which is head. And if the value of head matches with `val` than we can easily delete the head by changing the value of `prev.next` to `prev.next.next` as mentioned our approch above.

At the end we will return the `Sentinal Node` as it will refer to our original head (in case of head does not match with the `val`) or new head(in case of head matches with the `val`)

### Sentinal 

In the context of Military Sentinal refers to a soldier stationed to keep watch.

Similary in linked list context sentinal node will keep watch to the head of the list.