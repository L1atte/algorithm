function search(nums: number[], target: number): number {
  let index: number = -1;
  let left: number = -1;
  let right: number = nums.length;

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      index = mid;
      break;
    }

    if (nums[mid] > target) {
      right = mid;
    }

    if (nums[mid] < target) {
      left = mid;
    }
  }

  return index;
}
