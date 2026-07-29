function searchRange(nums: number[], target: number): number[] {
  return [findFirst(nums, target), findLast(nums, target)];
}

// [1,2,3,4,4,4,4,4,6]
function findFirst(nums: number[], target: number): number {
  let first = -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      first = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return first;
}

function findLast(nums: number[], target: number): number {
  let last = -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      last = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return last;
}
