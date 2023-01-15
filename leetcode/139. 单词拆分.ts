// dp[i]: 字符串 s(0, i-1) 能否由字典组成
// 求 dp[s.length + 1]
// dp[i] = for( 1 <= j =< i-1 ) dp[j-1] + s(j, i-1) in wordDict
// base case: dp[0] = true, dp[1] = dp[0] + s(1)

// dog [dog]

function wordBreak(s: string, wordDict: string[]): boolean {
	let dp: boolean[] = []
	dp[0] = true

	for (let i = 1; i <= s.length + 1; i++) {
		for (let j = 1; j <= i - 1; j++) {
			const subStr: string = s.substring(j, i)
			if (dp[j - 1] && wordDict.includes(subStr)) dp[i] = true
			else return false
		}
	}

	return dp[s.length + 1]
}

