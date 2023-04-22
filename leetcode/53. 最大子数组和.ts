// dp[i]: 以 i 为止的最大和
// dp[i] = max(dp[i-1], dp[i-1] + nums[i])
// i-1 >= 0
// dp[0] = nums[0]

function maxSubArray(nums: number[]): number {
	if (!nums || nums.length === 0) throw new Error();

	let max: number = 0;
	const dp: number[] = [];
	dp[0] = nums[0];
	max = dp[0];

	for (let i = 1; i < nums.length; i++) {
		dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
		max = Math.max(max, dp[i]);
	}

	return max;
}
