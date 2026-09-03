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

We can use this technique to sort an array. Lets say we want to sort an array in increment order.

Here are the steps we need to follow.

We need to compare each pair from the start of the array and check if the first element of the pair is greater than the second element. If yes then swap there position.

Continue this till the last 2 pair of the array in the firt iteration.

At the end of first iteration we will see the larget element of the array reaches the end.

Now again we need to continue the same comparision. But this time we will skip the last pair as the last element alreday placed in its position.

We will continue this till we sort the array.

Lets say we have an array of length 4.

So the iteration will run `n-1` times that is `4-1=3` times.

And in each iteration the compare will happen `n-1, n-2, n-3 ... 1`.

So the outer loop will run till `n-1` times and the inner loop will learn `n-(i+1)` times.

### Selection Sort

This is another algorithm to sort an array. 

We need to go throgh the each element of an array one by one and find the minimum value and than placed it to the start of the array.

If the length of my array is `n` then we will do this till `n-1` times, as we don't need to consider the last item because in the process of sorting other items the larget item will automatically placed at the end of the array.

In each iteration we will start the process of finding the minimum value from the `i+1` position. Here is why:

In first iteration we will find the minimum item of the whole array and place it in th first position.

In next iteration we don't need to consider that element so we will start from the second position till the last postition to find the minimum.

So the outer loop will run from `i=0` to `i<n-1`

And the inner loop will run from `j=i+1` to `j<n`.

### Insertion Sort

In this sorting algorithm we need to follow the below steps:

First we need to consider the first element of the array is sorted and the rest of the array is unsorted.

Than we will compare each element of the unsorted array with each element of its previous sorted array. So our outer loop will start from `i=1` till `i<n`;

If the previous element of the sorted array is greater than the current element of the unsorted array than we will move the previous element one step ahead. And our inner loop condition will be:

`while(arr[prevIndex] > currentElement && prev > 0)` 

And the base case will be `prev--`, so that it can compare with alll the elements of the sorted array.

The moment where we find the previous element is less than the current element we will break the inner loop and placed the current element in the position `prev + 1`


### Merge Sort

This is a divide and conquer algorithm.

It actually break the array in two parts till it creates array with each single element.

Than while returning it will keep merging those arrays by sorting them. 

For merging two sorting arrays it uses as helper function.

Lets take this example

`[8,4,9,5]`

This will become

`[8,4] and [9,5]`

Then we will call the same function for both of them recursively.

So now `[8,4]` will become

`[8] and [4]`

And `[9,5]` will become

`[9] and [5]`

Now this is the base case. Once we reach one element per call we will break the recursion loop and return the array as it is.

Then we will merge these two array in a sorting order by using the helper function.

So now we will have:

`[4,8] and [5,9]`

At the end we will merge those two sorted arrays as well using the helper function

So the result will be:

`[4,5,8,9]`

Now the helper function will take two pointers `i` and `j` for two arrays. And compare the elements from each array one by one. The smaller one will be pushed to the result array and the pointer will move to the next index.

This loop will continue till any one index reach the end of the array.

