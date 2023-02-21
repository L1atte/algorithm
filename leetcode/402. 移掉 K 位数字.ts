// 1432219
// 432219 132219 142219 143219 143229 142221

// 32219 42219
// 移除山峰
// 单调递增栈
// 1 4 3
// 取 k 次

function removeKdigits(num: string, k: number): string {
	if (num.length === k) return "0";

	const stack: number[] = [];
	let count: number = 0;

	for (let i = 0; i < num.length; i++) {
		const n = num[i];
		if (count < k) {
			const lastNum = stack[stack.length - 1];
			if (Number(n) < lastNum || i === num.length) {
				stack.pop();
				count++;
			}
		}
		stack.push(Number(n));
	}

	while (stack[0] === 0 && stack.length !== 1) stack.shift();
	return stack.join("");
}
