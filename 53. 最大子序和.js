/*
 * @Author: Latte
 * @Date: 2021-10-12 08:45:59
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-13 08:53:06
 * @FilePath: \algorithm\53. 最大子序和.js
 */
let maxSubArray = function (nums) {
	// 数组长度，dp初始化
	let [len, dp] = [nums.length, [nums[0]]];

	// 最大值初始化dp[0]
	let max = dp[0];
	for (let i = 1; i < len; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

		// 更新最大值
		max = Math.max(max, dp[i]);
	}

	return max;
};

let arr = [-2, 1, 6, 5, -6];
console.log(maxSubArray(arr));
