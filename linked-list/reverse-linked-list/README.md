## Reverse a Linked List.

To solve this we need to do these steps:

- Move head from first element to the last element of the list.
- Make the next of each element points to its previous element. So the next of the first element will refer to `null`.

### Problem
- In singly linked list we can have reference of the next element but there is no way to have a reference of the previous element.
- We can't directly go to the last element, we need to travel through the linked list.

### Solution
- Create a pointer called `prev` that will hold the reference of the previous element.
- Create a pointer called `curr` to travel through the list and change the next pointer to `prev` element.
- The loop will run till `curr` becomes `null`.

### Important consideration
Inside the loop if we directly change the `next` pointer to of the `curr` to `prev` than we will loose the reference of the next element of the list so there is no way we can move our `curr` pointer to the next element. To solve this we need to follow these steps one after another in order

- Have a `temp` variable to store the reference of the next element of current on the list. `temp = curr.next`
- Make the `next` pointer of `curr` to points to the `prev` element. `curr.next = prev`
- Shift the `prev` pointer to `curr`. `prev = curr`.
- Shift the `curr` pointer to next element on the list which is stored in `temp`. `curr = temp`

At the end we will return the `prev` element as it will store the head.