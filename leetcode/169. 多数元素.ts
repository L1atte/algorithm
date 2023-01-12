function majorityElement(nums: number[]): number | undefined {
	if (nums.length === 1) return nums[0]

	const half: number = nums.length / 2
	const map: Map<number, number> = new Map()
	for (let num of nums) {
		if (map.has(num)) {
			let curNum = map.get(num)!
			map.set(num, curNum + 1)
		} else {
			map.set(num, 1)
		}

		if (map.get(num)! > half) return num
	}
}
