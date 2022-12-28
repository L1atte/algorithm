// O(n)
function findPeakElement(nums: number[]): number {
	let index: number = 0

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > nums[index]) {
			index = i
		}
	}

	return index
}

function findPeakElement1(nums: number[]): number {
	let l: number = -1
	let r: number = nums.length - 1

	while (l + 1 < r) {
		let mid = Math.floor((l + r) / 2)
		if (nums[mid] > nums[mid + 1]) r = mid
		else l = mid
	}
	return r
}

// 我们强调，二分的本质是「二段性」而非「单调性」，而经过本题，我们进一步发现「二段性」还能继续细分，不仅仅只有满足 0101 特性（满足/不满足）的「二段性」可以使用二分，满足 1?1? 特性（一定满足/不一定满足）也可以二分
// 作者：AC_OIer
// 链接：https://leetcode.cn/problems/find-peak-element/solution/gong-shui-san-xie-noxiang-xin-ke-xue-xi-qva7v/
// 来源：力扣（LeetCode）
