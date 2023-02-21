// 1432219
// 432219 132219 142219 143219 143229 142221

// 32219 42219
// 移除山峰
// 单调递增栈
// 1 4 3
// 取 k 次

function removeKdigits(num: string, k: number): string {
	const stack: string[] = [];
	for (let i = 0; i < num.length; i++) {
		const c = num[i];
		while (k > 0 && stack.length && stack[stack.length - 1] > c) {
			stack.pop();
			k--;
		}
		if (c !== "0" || stack.length !== 0) {
			stack.push(c);
		}
	}
	while (k > 0) {
		stack.pop();
		k--;
	}
	return stack.length == 0 ? "0" : stack.join("");
}
