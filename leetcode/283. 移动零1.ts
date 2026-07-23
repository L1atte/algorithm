/**
 Do not return anything, modify nums in-place instead.
 */

//  0. 1  0  2  3
// 1 0 2 3 0
function moveZeroes(nums: number[]): void {
  const len = nums.length;
  let index = 0;
  let count = 0;
  for (; count < len; count++, index++) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      index--;
      nums.push(0);
    }
  }
}
