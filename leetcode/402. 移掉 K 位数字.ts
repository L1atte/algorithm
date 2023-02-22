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
		// 只要k>0且当前的c比栈顶的小，则栈顶出栈，k--
		while (k > 0 && stack.length && stack[stack.length - 1] > c) {
			stack.pop();
			k--;
		}
		// 当前的字符不是"0"，或栈非空（避免0入空栈），入栈
		if (c !== "0" || stack.length !== 0) {
			stack.push(c);
		}
	}
	// 如果还没删够，要从stack继续删，直到k=0
	while (k > 0) {
		stack.pop();
		k--;
	}
	// 如果栈空了，返回"0"，如果栈非空，转成字符串返回
	return stack.length == 0 ? "0" : stack.join("");
}
