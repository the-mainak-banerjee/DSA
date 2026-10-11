function searchRange(nums, target) {
  let result = [-1, -1];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let m = left + Math.floor((right - left) / 2);
    if (nums[m] < target) {
      left = m + 1;
    } else {
      right = m;
    }
  }

  if (nums[left] === target) {
    result[0] = left;
  }

  right = nums.length - 1;

  while (left < right) {
    let m = left + Math.ceil((right - left) / 2);

    if (nums[m] > target) {
      right = m - 1;
    } else {
      left = m;
    }
  }

  if (nums[left] === target) {
    result[1] = left;
  }

  return result;
}

function searchRange2(nums, target) {
  let result = [-1, -1];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      result[0] = m;
      r = m - 1;
    }
  }

  r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.ceil((r - l) / 2);

    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) { 
      l = m + 1;
    } else {
      result[1] = m;
      l = m + 1;
    }
  }

  return result;
}
