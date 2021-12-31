/*
 * @Author: Latte
 * @Date: 2021-12-31 08:32:20
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-31 08:52:19
 * @FilePath: \algorithm\70. 爬楼梯.js
 */

/**
 * 动态规划
 * dp[i]：到达 i 阶有 dp[i] 钟方法
 * dp[i] = dp[i - 1] + dp[n - 2]
 * dp[0] = 1, dp[1] = 1
 */
var climbStairs = function (n) {
	if (n === 0) return 0;
	if (n === 1) return 1;

	let dp = [];
	dp[0] = 1;
	dp[1] = 1;
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};
