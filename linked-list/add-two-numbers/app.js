function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function addTwoNumbers(l1, l2) {
  let result = new ListNode()
  let resultHead = result
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = Math.floor(sum / 10)
    let digit = sum % 10

    let newNode = new ListNode(digit)
    result.next = newNode

    result = result.next
    l1 = l1.next
    l2 = l2.next
  }

  return resultHead.next
}