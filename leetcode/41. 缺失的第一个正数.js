var firstMissingPositive = function (nums) {
	const flag = [];
	for (let i = 0; i < nums.length; i++) {
		flag[nums[i]] = 1;
	}

	let j = 1;
	while (true) {
		if (flag[j] !== 1) {
			return j;
		}
		j++;
	}
};
