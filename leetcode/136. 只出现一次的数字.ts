function singleNumber(nums: number[]): number {
	const map: Map<number, number> = new Map();

	for (const num of nums) {
		const count = map.get(num) || 0;
		map.set(num, count + 1);
	}

	for (const m of map) {
		if (m[1] === 1) return m[0];
	}
	return -1;
}
