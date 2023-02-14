// nums[i] for(i ~ nums.length - 1) if(nums[j] > nums[i]) j - 1 else 0

function dailyTemperatures(temperatures: number[]): number[] {
	const answer: number[] = [];

	for (let i = 0; i < temperatures.length; i++) {
		let j = i + 1;
		while (j < temperatures.length) {
			if (temperatures[j] > temperatures[i]) {
				answer[i] = j - i;
				break;
			}
			if (j === temperatures.length - 1) answer[i] = 0;

			j++;
		}
		if (i === temperatures.length - 1) answer[i] = 0;
	}

	return answer;
}
