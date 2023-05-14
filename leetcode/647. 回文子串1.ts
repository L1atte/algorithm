// dp[i, j] = s[i] === s[j] && dp[i-1, j-1]
// dp[0, 0] = true

function countSubstrings1(s: string): number {
	let count: number = 0;

	const dp = new Array(s.length);
	for (let i = 0; i < s.length; i++) {
		dp[i] = new Array(s.length).fill(false);
	}

	for (let j = 0; j < s.length; j++) {
		for (let i = 0; i <= j; i++) {
			if (i === j) {
				// 单个字符的情况
				dp[i][j] = true;
				count++;
			} else if (j - i === 1 && s[i] === s[j]) {
				// 两个字符的情况
				dp[i][j] = true;
				count++;
			} else if (j - i > 1 && s[i] === s[j] && dp[i + 1][j - 1]) {
				// 多于两个字符
				dp[i][j] = true;
				count++;
			}
		}
	}

	return count;
}
