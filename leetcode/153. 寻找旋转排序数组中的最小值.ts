// https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/solution/er-fen-cha-zhao-wei-shi-yao-zuo-you-bu-dui-cheng-z/
// 4567 8 9123
// 7891 2 3456
function findMin(nums: number[]): number {
	let left: number = 0
	let right: number = nums.length - 1

	while (left < right) {
		const mid = Math.floor((right + left) / 2)

		if (nums[mid] > nums[right]) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return nums[left]
}