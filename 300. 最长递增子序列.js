/*
 * @Author: Latte
 * @Date: 2021-12-24 09:01:27
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-24 10:26:14
 * @FilePath: \algorithm\300. 最长递增子序列.js
 */

// 动态规划
/**
 * 1.定义 dp ：dp[i]是以 nums[i] 结尾的最长递增子序列的长度
 * 2.状态转移方程：位置 i 的最长子序列等于从0到 i-1 各个位置上小于 nums[i] 的最长递增子序列 + 1的最大值，即 if(nums[i] > nums[j]) dp[i] = max(dp[i], dp[j] + 1)
 * 注意，这里不是要dp[i] 与 dp[j] + 1进行比较，而是我们要取dp[j] + 1的最大值。
 * 3.dp[i]的初始化，每个dp[i]的起始大小至少是 1
 * 4.确定遍历顺序：dp[i] 是有0到i-1各个位置的最长升序子序列 推导而来，那么遍历i一定是从前向后遍历。
 */

var lengthOfLIS = function (nums) {
	let dp = Array(nums.length).fill(1);
	let max = 1;

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}

		max = Math.max(max, dp[i]);
	}

	return max;
};
