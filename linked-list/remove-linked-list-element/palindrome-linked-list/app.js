function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeElements(head, val) {
  let sentinalNode = new ListNode();
  sentinalNode.next = head;

  let prev = sentinalNode;
  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return sentinalNode.next;
}
