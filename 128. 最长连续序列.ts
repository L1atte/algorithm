function longestConsecutive(nums: number[]): number {
	let max: number = 0
	let set: Set<number> = new Set(nums)

	for (const item of set) {
		if (set.has(item - 1)) continue

		let cur = item
		while (set.has(cur + 1)) {
			set.delete(cur + 1)
			cur++
		}
		max = Math.max(max, cur - item + 1)
	}

	return max
}
