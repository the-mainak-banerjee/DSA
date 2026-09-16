## Swap Nodes in pair.

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

### Solution

There are two common approaches: **iterative** (using a dummy node) and **recursive**.

#### Approach 1: Iterative

We solve the problem one pair at a time. For each pair, we track two pointers:

- `current` (`C`) — the first node of the pair
- `next` (`N`) — the second node of the pair

To swap a pair, three pointer updates are needed:

1. `C.next = N.next` — current now points past the pair, to whatever comes after it
2. `N.next = C` — next now points back to current, completing the swap
3. `prev.next = N` — the node before the pair now points to the new head of the pair (`N`)

The third step is why we need a **dummy node** acting as `prev`. Without it, once we move on to the second pair, there'd be no way to reach back and repoint the *previous* pair's tail to the new head of the *current* pair.

After swapping a pair, we advance all three pointers to set up the next pair:

- `prev = C` (since `C` is now the tail of the just-swapped pair)
- `current = prev.next`
- `next = current.next` (if it exists)


#### Approach 2: Recursive

Recursion handles one pair per call and delegates the rest of the list to a recursive call on itself.

Base case: if the list is empty, or has only one node left, there's nothing to swap — return it as is.

Recursive case: take the first two nodes, `first` and `second`.

1. `first.next = swapPairs(second.next)` — recursively swap the remainder of the list, and attach the result after `first`
2. `second.next = first` — `second` now becomes the head of this pair, pointing to `first`
3. Return `second`, since it's now the head of the swapped pair


### Leet Code reference

- Problem Number 24
- [Problem Link](https://leetcode.com/problems/swap-nodes-in-pairs/description/)