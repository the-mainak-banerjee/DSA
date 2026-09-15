function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next
}

function swapPairs(head) {
  if (!head || !head.next) return head
  
  let dummy = new ListNode()
  dummy.next = head

  let p = dummy
  let c = head
  let n = head.next

  while (c && n) {
    p.next = n
    c.next = n.next
    n.next = c

    p = c
    c = p.next
    n = c && c.next
  }

  return dummy.next
}


function swapPairsRecursive(head) {
  // Base case
  if(!head || !head.next) return head

  let first = head
  let second = head.next

  first.next = swapPairsRecursive(second.next)
  second.next = first
  return second
}