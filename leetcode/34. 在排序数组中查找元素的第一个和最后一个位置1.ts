// [a,a, a, b,b,c]

function lowerBound(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

function searchRange1(nums: number[], target: number): number[] {
  const start = lowerBound(nums, target);
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1]; // nums 中没有 target
  }
  // 如果 start 存在，那么 end 必定存在
  const end = lowerBound(nums, target + 1) - 1;
  return [start, end];
}
