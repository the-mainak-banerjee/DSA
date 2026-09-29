function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeNthFromEndTwoPass(head, n) {
  let sentinal = new ListNode();
  sentinal.next = head;

  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  let prev = sentinal;
  let prevIdx = length - n;
  for (let i = 0; i < prevIdx; i++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return sentinal.next;
}

function removeNthFromEndOnePass(head, n) {
  let sentinal = new ListNode();
  sentinal.next = head;

  let first = sentinal;
  let second = sentinal;

  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  while (first.next) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return sentinal.next;
}
