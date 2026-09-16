## Design Linked List

### Create a node
- The function should take a value as parameter.
- Add that value to `this.val`
- The next pointer should points to `null`.

### Create a linked list
- The head represents a linked list.
- Inside the create function we will point the `head` to null.
- Make the `size` of the linked list 0.

### Get a value of an index
- Maintain a current pointer which will point to head at first.
- Travel till that index by using a loop. And the `current` pointer will point that index positioned node.
- Handle the corner cases of invalid index. In this case we will return -1;

### Add at head
- Create a node.
- Points the `next` of the new node to the head.
- Points the head to the new node.
- Increase the size.

## Add at tail
- Create a node.
- Maintain a current pointer which will point to head at first.
- Travel till the last element and the `current` pointer will point to the last element.
- The next pointer of `current` will refer to the new node.
- Increase the size.
- Handle the corner case. If head is null it will refer to the new node.

## Add at index
- Create a node.
- Maintain a current pointer which will point to head at first.
- Travel till the (index - 1) node and the `current` pointer will point to that node.
- The next pointer of my new node will refer to the `current.next`
- The `current.next` will refer to the new node.
- Handle edge cases:
    - If invalid index than return. But here we will allow to add when index is equal to the size of the linked list.
    - If index is `0` we will use add at head function.
    - If index is equal to the size of the linked list we will use add at tail function.
- Increase the size.

## Delete At index
- Maintain a current pointer which will point to head at first.
- Travel till the (index - 1) node and the `current` pointer will point to that node.
- The `current.next` will refer to the (index+1) th node.
- Handle corner cases of invalid index.
- Decrease the size 
