## Searching & Sorting

There are different types of algorithm for searching and sorting.

### Linear Search

This is the most basic one. We try to find out the a target inside an array by comapring the target with all the elements of the array one after another. For this we can use a normal `for` loop.

### Binary Search

This will only work if the array is sorted.

We first take 2 pointers:
    - left = start index of the array
    - right = the last index of the array

Then we calculate the middle of the array by using the below formula:
    `middle = Math.floor((left + right)/2)`

Now there are only three condition to check:

1. target === middle
In this case return the middle index.

2. target > middle
In this case we will shift the left pointer to the right of the middle and then continue with the loop.
    `left = middle + 1`

3. target < middle
In this case we will shift the right pointer to the left of the middle and then continue with the loop.
    `right = middle - 1`

If no condition satisfies we will return -1.

For this we will use while loop. The base condition of the loop will be when right pointer crosses the left pointer. Means when `right<left` we will stop the loop.

`while(right >= left){}`


### Bubble Sort

We cna use this technique to sort an array. Lets say we want to sort an array in increment order.

Here are the steps we need to follow.

We need to compare each pair from the start of the array and check if the first element of the pair is greater than the second element. If yes then swap there position.

Continue this till the last 2 pair of the array in the firt iteration.

At the end of first iteration we will see the larget element of the array reacges the end.

Now again we need to continue the same comparision. But this time we will skip the last pair as the last element alreday placed in its position.

We will continue this till we sort the array.

Lets say we have an array of length 4.

So the iteration will run `n-1` times that is `4-1=3` times.

And in each iteration the compare will happen `n-1, n-2, n-3 ... 1`.

So the outer loop will run till `n-1` times and the inner loop will learn `n-(i+1)` times.
