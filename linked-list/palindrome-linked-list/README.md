## Palindrome Linked List.

There are two ways to solve this problem:

### Using Array

- Convert the Linkedlist to an array.
- Check if the array is a Palindrome or not.


### Using Linked List only

We need to follow 3 steps in this approch.

#### Step 1

We need to find the middle element of the linked list.
For this use the solution of [Middle Of Linked List Problem](https://github.com/the-mainak-banerjee/DSA/tree/main/linked-list/middle-of-linked-list)

#### Step 2
Next we need to reverse the second half of the Linkedlist.
For this use the solution of [Reverse Linked List Problem](https://github.com/the-mainak-banerjee/DSA/tree/main/linked-list/reverse-linked-list)

#### Step 3

In step 3, we need to maintain two points:
- `firstList` which will start from head and travel through the first part of the list.
- `secondList` which will start from the tail of the linked list and which was stored in `prev` variable at the end of step 2.
- Then we need compare each element of the first half with its subsequent second half element. If all of them match than it is a palindrome, else it is not.