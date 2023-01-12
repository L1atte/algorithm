/**
 * 贪心算法
 */
const maxProfit = (prices) => {
	// 定义第一天为最低价格
	let min = prices[0];
	// 利润
	let profit = 0;

	// 遍历数据
	for (let i = 0; i < prices.length; i++) {
		// 如果价格比最低价格低，更新最低价格
		min = Math.min(min, prices[i]);
		// 如果利润比当前利润高，更新利润
		profit = Math.max(profit, prices[i] - min);
	}
	return profit;
};

/**
 * 动态规划
 * 解题思路：
 *  1. dp[i][0]: 第i天持有股票时所得的最多现金
 *  2. dp[i][1]: 第i天不持有股票时所得的最多现金
 *  3. 确定递推公式
 *  4. 如果第i天持有股票即 dp[i][0]，那么可以由两个状态推出来
 *    4.1 第i-1天就持有股票，那么保持现在，即 dp[i][0] = dp[i-1][0]
 *    4.2 第i天买入股票，即 dp[i][0] = -prices[i]
 *  5. 如果第i天不持有股票，即 dp[i][1]，那么可以由两个状态推出来
 *    5.1 第i-1天不持有股票，即 dp[i][1] = dp[i-1][1]
 *    5.2 第i天卖出股票， 即 dp[i][1] = dp[i][0] + prices[i]
 *  6. 根据题意 dp数组应该取最大值，则
 *    dp[i][0] = max(dp[i - 1][0], -prices[i])
 *    dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0])
 *  7. 确认初始值 dp[0]，通过简单分析可以得出 dp[0][0]为第0天持有股票的最多现金，dp[0][1]为第0天不持有股票的最多现金，则 dp[0] = [-prices[0], 0]
 */
const maxProfit = (prices) => {
	const len = prices.length;
	// 创建 dp 数组
	const dp = new Array(len).fill([0, 0]);
	// dp 数组初始化
	dp[0] = [-prices[0], 0];

	for (let i = 1; i < len; i++) {
		// 更新dp[i]
		dp[i] = [
			Math.max(dp[i - 1][0], -prices[i]),
			Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
		];
	}
	return dp[len - 1][1];
};
