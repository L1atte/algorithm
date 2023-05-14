/**
 Do not return anything, modify nums in-place instead.
 */

function rotate1(nums: number[], step: number): void {
	const copyNums = nums.slice();

	for (let i = 0; i < nums.length; i++) {
		const nextIndex = (i + step) % nums.length;
		nums[nextIndex] = copyNums[i];
	}
}
