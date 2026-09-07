// Using array
function isPalindromeByArr(head) {
  let arr = [];
  let curr = head

  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false
    }

    left++
    right--
  }

  return true
}


// Using Linked List only
function isPalindrome(head) {
  // Find the middle of the linked list

  let fast = head
  let slow = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  //  Now reverse the second half of the list
  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  // Compare two parts
  let firstList = head;
  let secondList = prev;

  while (secondList) {
    if (firstList.val !== secondList.val) {
      return false
    }
  }

  return true

}