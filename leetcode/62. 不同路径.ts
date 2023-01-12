// dp[m-1][n-1]
// dp[m-1][n-1] = dp[m-2][n-1] + dp[m-1][n-2]

function uniquePaths(m: number, n: number): number {
	const map: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 || j === 0) {
				map[i][j] = 1
			} else {
				map[i][j] = map[i - 1][j] + map[i][j - 1]
			}
		}
	}

	return map[m - 1][n - 1]
}
