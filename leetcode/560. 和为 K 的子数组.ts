function subarraySum(nums: number[], k: number): number {
	let count: number = 0;

	for (let i = 0; i < nums.length; i++) {
		let sum: number = 0;
		for (let j = i; j < nums.length; j++) {
			sum += nums[j];
			if (sum === k) count++;
		}
	}

	return count;
}
