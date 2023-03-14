// a < b < c < d.... < z
// sum = a + (b + z)
// sum > 0, z--
// sum < 0, b++
// sum = 0, push res, b++, z--

function threeSum(nums: number[]): number[][] {
  const newNums = nums.sort((a, b) => a - b);
  const res: number[][] = []

  for (let i = 0; i < newNums.length; i++) {
    if (i > 0 && newNums[i] === newNums[i - 1]) continue; // 去重
    let left = i + 1;
    let right = newNums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // 去重
        while (left < right && nums[right] === nums[right - 1]) right--; // 去重
        left++;
        right--;
      } else if (sum < 0) left++;
      else if (sum > 0) right--;
    }
  }
  return res
};