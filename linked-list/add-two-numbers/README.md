## Add two numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

### Solution


To solve this problem we need to loop through both the linked list and keep calculating the sum of the respective values.

If the result of the sum is greather than 10 then we need to maintain a carry and that will be added with the sum of next values of those linked list.

So we need to maintain a variable for storing the `carry` value of each some. And the carry will be calculated by
    `Math.floor(sum/10)`

Next we will calculate the digit which will create the new linkedlist by using the formula.
    `sum % 10`

To store the new linked list we need to create a dummy node at start. The next value of this node will points to the new node created by the digit in the previous step.

Now we will shift both the list and the dummy node to their next node.

This loop will run if both the list of the `carry` has value.

At the end we need to return the head of the newly created linked list by using the digits. But at the end of the loop the dummy node will reach to the end of that new list.

So we will also mainatain another variable `dummyHead` that will store the initial value of the dummy node.

So at the end we will return `dummyHead.next` as it will points to the head of the new linked list

### Leet Code reference

- Problem Number 2 
- [Problem Link](https://leetcode.com/problems/add-two-numbers/description/)