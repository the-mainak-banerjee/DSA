
// Approch 1: Using Set to store visited nodes
function hasCycleBySet(head) { 
  let linkedListSet = new Set();
  let current = head;

  while (current) {
    if (linkedListSet.has(current)) {
      return true;
    }
    linkedListSet.add(current);
    current = current.next;
  }

  return false;
}


// Approch 2: Using Floyd's Cycle Detection Algorithm (Tortoise and Hare)
function hasCycle(head) {
  if(!head) return false
  let slow = head;
  let fast = head.next;

  while (fast !== slow) {
    if (fast === null || fast.next === null) {
      return false
    }

    slow = slow.next
    fast = fast.next.next;
  }

  return true
}