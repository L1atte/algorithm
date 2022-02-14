/*
 * @Author: Latte
 * @Date: 2022-02-11 08:38:49
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-14 10:37:21
 * @FilePath: \algorithm\1143. 最长公共子序列.js
 */

/**
 * 动态规划
 * 思路：
 * 1.定义 dp，dp[i][j] 表示为 长度为 i-1 的字符串 text1 和 长度为 j-1 的字符串 text2 的最长公共子序列
 * 2.确定递推公式
 *  主要分为两种情况
 *  2.1. text1[i-1] 和 text2[j-1] 相同，那么 dp[i][j] = dp[i-1][j-1] + 1
 *  2.2. text[i-1] 和 text2[j-1] 不相同，那就看看text1[0, i - 2]与text2[0, j - 1]的最长公共子序列 和 text1[0, i - 1]与text2[0, j - 2]的最长公共子序列，取最大的
 *  即：dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
 */

var longestCommonSubsequence = function (text1, text2) {
	// 创建 dp[i][j]
	let dp = Array.from(Array(text1.length + 1), () =>
		Array(text2.length + 1).fill(0)
	);

	for (let i = 0; i < text1.length; i++) {
		for (let j = 0; j < text2.length; j++) {
			if (text1[i - 1] === text2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}

	return dp[text1.length][text2.length];
};
