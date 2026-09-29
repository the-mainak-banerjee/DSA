function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let length = 0;
  let curr = head;

  while (curr) {
    curr = curr.next;
    length++;
  }

  let rotateCount = k % length;
  let first = head;
  let second = head;

  for (let i = 0; i < rotateCount; i++) {
    first = first.next;
  }

  while (first.next) {
    first = first.next;
    second = second.next;
  }

  first.next = head;
  let newHead = second.next;
  second.next = null;

  return newHead;
}
