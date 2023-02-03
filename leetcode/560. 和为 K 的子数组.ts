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

function subarraySum1(nums: number[], k: number): number {
	const mp: Map<number, number> = new Map();
	mp.set(0, 1);
	let count = 0,
		pre = 0;
	for (const x of nums) {
		pre += x;
		if (mp.has(pre - k)) {
			count += mp.get(pre - k)!;
		}
		if (mp.has(pre)) {
			mp.set(pre, mp.get(pre)! + 1);
		} else {
			mp.set(pre, 1);
		}
	}
	return count;
}
