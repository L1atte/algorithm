function findMaxConsecutiveOnes(nums: number[]): number {
	let res: number = 0;
	let count: number = 0;

	nums.forEach(item => {
		if (item === 1) {
			count++;
		} else {
			count = 0;
		}
		res = Math.max(res, count);
	});

	return res;
}
