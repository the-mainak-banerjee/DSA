## Few Important Points

- If first node of linkedlist is involved in any case of problem be it delete or sort two nodes then create a sentinal node.

- Always think about slow and fast pointer if you try to solve in one pass. 

- Whenever you need to work with some node which is `n` th position from last think about create two pointers - `first` and `second`. Let them move one step at a time but `first` pointer should start from `n` node away of `second` node.

```js
for (let i = 0; i < n; i++) {
    first = first.next;
  }
```

- Whenever you are thinking to solve by using `prev` and `next` pointers stop and think if it can be done by using one `curr` pointer or not. Like [Remove Duplicate Problem](https://github.com/the-mainak-banerjee/DSA/tree/main/linked-list/remove-duplicates-sorted-list). Here two siblings are involved so no need to track any `prev` and all.