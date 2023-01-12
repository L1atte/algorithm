/**
 * dp[i][0] 表示第i天没有股票，到第i天的收益
 * 第i天没有股票，有两种情况
 *   1.昨天也没有股票，收益为 dp[i-1][0]
 *   2.昨天有股票，但是今天卖了，收益为 dp[i-1][1] + prices[i]
 *   3.dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
 *
 * dp[i][1] 表示第i天有股票，到第i天的收益
 * 第i天有股票，有两种情况
 *   1.昨天没有股票，今天买入，收益为 dp[i-1][0] - prices[i]
 *   2.昨天有股票，收益为 dp[i-1][1]
 *   3.dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
 *
 * 题目求第i天最大收益，即 Math.max(dp[length-1][0], dp[length-1][1])
 * 显然前者大于后者，那么就是求 dp[length-1][0]
 *
 * base case:
 *  day 0 没买：dp[0][0] = 0
 *  day 0 买了：dp[0][1] = -prices[0]
 */

function maxProfit(prices: number[]): number {
	const dp: number[][] = []

	const length: number = prices.length
	if (length === 1) return 0

	dp[0] = [0, -prices[0]]
	for (let i = 1; i < length; i++) {
		dp[i] = new Array(2)
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
	}

	return dp[length - 1][0]
}
