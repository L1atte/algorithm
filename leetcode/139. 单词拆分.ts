// dp[i]: 字符串 s(0, i-1) 能否由字典组成
// 求 dp[s.length]
// dp[i] = for( 0 <= j =< i-1 ) dp[j] + s(j, i-1) in wordDict
// base case: dp[0] = true, dp[1] = dp[0] + s(1)

// leetcode ['leet', 'code']

function wordBreak(s: string, wordDict: string[]): boolean {
	const wordSet: Set<string> = new Set(wordDict);
	const len: number = s.length;
	const dp: boolean[] = new Array(len + 1).fill(false);
	dp[0] = true;

	for (let i = 1; i <= len; i++) {
		for (let j = i - 1; j >= 0; j--) {
			// j去划分成两部分
			const suffix: string = s.slice(j, i); // 后缀部分 s[j: i-1]
			if (wordSet.has(suffix) && dp[j]) {
				// 后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
				dp[i] = true;
				break; // dp[i] = true了，i长度的子串已经可以拆成单词了，不需要j继续划分子串了
			}
		}
	}
	return dp[len];
}
