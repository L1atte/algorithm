function twoSum(nums: number[], target: number): number[] {
  const len = nums.length;

  if (len === 0) return [];

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
