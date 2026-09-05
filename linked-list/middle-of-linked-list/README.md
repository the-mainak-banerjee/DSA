## Middle of a Linked List.

To solve this problem we need to follow a pattern. Which is maintain two pointers:
- Slow -> This will move one step at a time.
- Fast -> This will move two step at a time.

When the size of linkedlist is even:
- We need to break the loop when our `fast` pointer becomes null. At that time `slow` pointer reaches to the middle element.

When the size of linkedlist is odd:
- We need to break the loop when our `fast.next` points to null. At that time `slow` pointer reaches to the middle element.