// [-2,1,-3,4,-1,2,1,-5,4]
// sum, max

function maxSubArray(nums) {
  if (!nums || nums.length === 0) return 0;

  let sum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(max, sum);
  }

  return max;
}
