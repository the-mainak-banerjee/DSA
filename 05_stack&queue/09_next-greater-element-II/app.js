
function nextGreaterElementsUnOptimize(nums) {
  let arr = [...nums, ...nums]
  let n = arr.length;
  let stack = [];

  stack.push(arr[n - 1]);
  let res = Array(n).fill(-1);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];

      if (arr[i] > top) {
        stack.pop();
      } else {
        ans[i] = top;
        break;
      }
    }

    stack.push(arr[i]);
  }

  return res.slice(0,n/2);
}

function nextGreaterElements(nums) {
  let n = nums.length;
  let stack = []

  stack.push(nums[n - 1])
  let res = Array(n).fill(-1)

  for (let i = (2 * n) - 2; i >= 0; i--){
    while (stack.length) {
      let top = stack[stack.length - 1]

      if (nums[i % n] > top) {
        stack.pop()
      } else {
        ans[i % n] = top;
        break
      }
    }

    stack.push(nums[i%n])
  }

  return res
}