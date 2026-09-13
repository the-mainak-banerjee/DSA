function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? 0 : next;
}

function mergeTwoLists(l1, l2) {
  // corner case
  if (!l1) return l2;
  if (!l2) return l1;

  let start = new ListNode()
  let head = start

  while (l1 && l2) {
    if (l1.next < l2.next) {
      start.next = l1;
      l1 = l1.next
    } else {
      start.next = l2
      l2 = l2.next
    }

    start = start.next
  }

  if (l1) start.next = l1
  if (l2) start.next = l2
  
  return head.next
}


function mergeTwoListApprochTwo(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let curr = null
  if (l1.val < l2.val) {
    curr = l1
    l1 = l1.next
  } else {
    curr = l2
    l2 = l2.next
  }

  let head = curr

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next
    } else {
      curr = next.l2
      l2 = l2.next
    }

    curr = curr.next
  }

  if (l1) curr.next = l1
  if (l2) curr.next = l2
  
  return head
}