function findLength(nums1: number[], nums2: number[]): number {
	const l1: number = nums1.length
	const l2: number = nums2.length
	let max: number = 0
	const dp = new Array(l1)
	for (let i = 0; i <= l1; i++) {
		// 初始化整个dp矩阵，每个值为0
		dp[i] = new Array(l2).fill(0)
	}

	for (let i = 0; i < l1; i++) {
		for (let j = 0; j < l2; j++) {
			if (nums1[i] === nums2[j]) {
				dp[i + 1][j + 1] = dp[i][j] + 1
			} else {
				dp[i + 1][j + 1] = 0
			}
			max = Math.max(max, dp[i + 1][j + 1])
		}
	}

	return max
}
