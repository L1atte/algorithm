// [2,3,1,1,4]

function canJump(nums: number[]): boolean {
  let reach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (reach < i) return false;

    reach = Math.max(nums[i] + i, reach);
  }

  return reach >= nums.length - 1 ? true : false;
}
