// target
// nums[0] +.... + nums[target-1] === nums[target+1] +...+ nums[length - 1]

function pivotIndex(nums: number[]): number {
	let rightSum: number = 0;
	let leftSum: number = 0;
	let res: number = -1;

	for (let i = 1; i < nums.length; i++) {
		rightSum += nums[i];
	}

	for (let i = 0; i < nums.length; i++) {
		if (rightSum === leftSum) {
			res = i;
			break;
		}
		rightSum = rightSum - nums[i + 1];
		leftSum = leftSum + nums[i];
	}

	return res;
}
