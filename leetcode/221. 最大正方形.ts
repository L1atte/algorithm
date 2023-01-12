function maximalSquare(matrix: string[][]): number {
	let maxSideLength: number = 0
	const dp: number[][] = new Array(matrix.length)
		.fill(0)
		.map(() => new Array(matrix[0].length).fill(0))

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === "1") {
				if (i === 0 || j === 0) {
					dp[i][j] = 1
				} else {
					dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
				}
			}
			maxSideLength = Math.max(maxSideLength, dp[i][j])
		}
	}

	return maxSideLength * maxSideLength
}
