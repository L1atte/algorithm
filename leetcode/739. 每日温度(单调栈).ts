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

// 单调栈
// [73,74,75,71,69,72,76,73]
// [73, 74, 75, 76]
function dailyTemperatures1(temperatures: number[]): number[] {
	const res: number[] = new Array(temperatures.length).fill(0);
	const stack: number[] = [];
	for (let i = temperatures.length - 1; i >= 0; i--) {
		while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
			stack.pop();
		}
		if (stack.length) {
			res[i] = stack[stack.length - 1] - i;
		}
		stack.push(i);
	}
	return res;
}
