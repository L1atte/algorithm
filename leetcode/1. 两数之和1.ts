function twoSum(nums: number[], target: number): number[] {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    for (let j = i + 1; j < len; j++) {
      if (target - cur === nums[j]) return [i, j];
    }
  }

  return [];
}
