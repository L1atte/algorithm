function largestNumber(nums: number[]): string {
	nums.sort((a, b) => {
		const str1 = b.toString() + a.toString(),
			str2 = a.toString() + b.toString()
		if (str1 > str2) {
			return 1
		} else {
			return -1
		}
	})
	if (nums[0] == 0) return "0"
	return nums.join("")
}
