// answer[n]: nums[0] * ... nums[n-1] * nums[n+1] * nums[end]

// 0. 1. 2. 3

function productExceptSelf(nums: number[]): number[] {
	const left: number[] = [];
	left[0] = 1;
	for (let i = 1; i < nums.length; i++) {
		left[i] = nums[i - 1] * left[i - 1];
	}

	const right: number[] = [];
	right[nums.length - 1] = 1;
	for (let i = nums.length - 2; i >= 0; i--) {
		right[i] = nums[i + 1] * right[i + 1];
	}

	const res: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		res[i] = left[i] * right[i];
	}

	return res;
}
