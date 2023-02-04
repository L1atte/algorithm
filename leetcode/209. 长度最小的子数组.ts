function minSubArrayLen(target: number, nums: number[]): number {
	let minLength: number = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < nums.length; i++) {
		let sum: number = 0;
		for (let j = i; j < nums.length; j++) {
			sum = sum + nums[j];

			if (sum >= target) {
				minLength = Math.min(minLength, j - i + 1);
				break;
			}
		}
	}

	return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
}

// 滑动窗口
function minSubArrayLen1(target: number, nums: number[]): number {
	let minLength: number = Number.MAX_SAFE_INTEGER;
	let left: number = 0;
	let right: number = 0;
	let sum: number = 0;

	while (right < nums.length) {
		sum = sum + nums[right];
		while (sum >= target) {
			minLength = Math.min(minLength, right - left + 1);
			sum = sum - nums[left];
			left++;
		}
		right++;
	}

	return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
}
