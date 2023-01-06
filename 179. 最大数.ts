function largestNumber(nums: number[]): string {
	if (Number(nums.join(""))) {
		return nums
			.map((a) => a.toString())
			.sort((a, b) => b + a - (a + b))
			.join("")
	}
	return "0"
}
