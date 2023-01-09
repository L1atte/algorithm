/**
 * “最大子数组和”是DP算法里的经典案例之一，经典到这个解法甚至有一个名称Kadane's Algorithm。本题是“最大子数组和”的变型，但Kadane's Algo依然适用。唯一要注意的是“乘法”下由于两个负数的乘积也依然可能得到一个很大的正数，所以必须同时计算“最小子数组和”，除此之外无任何区别。Kadane's Algo变型可以解决问题还有：

1186. 删除一次得到子数组最大和 - Medium
题解：1186. 删除一次得到子数组最大和
1191. K 次串联后最大子数组之和 - Hard
题解：1191. K 次串联后最大子数组之和
 */

function maxProduct(nums: number[]): number {
	if (nums.length === 1) return nums[0]

	let max: number[] = [],
		min: number[] = []
	max[0] = nums[0]
	min[0] = nums[0]

	for (let i = 1; i < nums.length; i++) {
		max[i] = Math.max(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i])
		min[i] = Math.min(min[i - 1] * nums[i], max[i - 1] * nums[i], nums[i])
	}

	return Math.max(...max)
}

/**
 * 状态压缩
 * 观察到第 i 个状态 只与 i-1 有关，那么我们根据“滚动数组”的思想，可以只用两个变量来维护 i-1 的状态，一个维护 max，一个维护 min，并且把 result 放进每轮迭代里面获取最大值
 */
function maxProduct1(nums: number[]): number {
	if (nums.length === 1) return nums[0]

	let max: number = nums[0],
		min: number = nums[0],
		res: number = nums[0],
		temp1: number = 0,
		temp2: number = 0

	for (let i = 1; i < nums.length; i++) {
		temp1 = max * nums[i]
		temp2 = min * nums[i]

		max = Math.max(temp1, temp2, nums[i])
		min = Math.min(temp1, temp2, nums[i])
		// res 放进每轮迭代，滚动获取最大值
		res = Math.max(max, res)
	}

	return res
}

