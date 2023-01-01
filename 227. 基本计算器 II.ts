// 3 + (2 + 3 * (2 + 3))

/**
 * 对于「任何表达式」而言，我们都使用两个栈 nums 和 ops：
	nums ： 存放所有的数字
	ops ：存放所有的数字以外的操作
	然后从前往后做，对遍历到的字符做分情况讨论：

		* 空格 : 跳过
		* ( : 直接加入 ops 中，等待与之匹配的 )
		* ) : 使用现有的 nums 和 ops 进行计算，直到遇到左边最近的一个左括号为止，计算结果放到 nums
		* 数字 : 从当前位置开始继续往后取，将整一个连续数字整体取出，加入 nums
		* + - * / ^ % : 需要将操作放入 ops 中。在放入之前先把栈内可以算的都算掉（只有「栈内运算符」比「当前运算符」优先级高/同等，才进行运算），使用现有的 nums 和 ops 进行计算，直到没有操作或者遇到左括号，计算结果放到 nums
 */

function calculate(s: string): number {
	const calc = (numStack: number[], opsStack: string[]): number => {
		if (numStack.length < 2 || opsStack.length <= 0) return 0

		const nextNum: number = numStack.pop()!,
			preNum: number = numStack.pop()!,
			operator: string = opsStack.pop()!

		let res: number = 0
		switch (operator) {
			case "+":
				res = preNum + nextNum
				break
			case "-":
				res = preNum - nextNum
				break
			case "*":
				res = preNum * nextNum
				break
			case "/":
				res = Math.floor(preNum / nextNum)
				break
			case "%":
				res = preNum % nextNum
				break
			case "^":
				res = Math.pow(preNum, nextNum)
				break
		}
		return res
	}

	while (s.indexOf(" ") !== -1) {
		s = s.replace(" ", "")
	}

	const numStack: number[] = []
	const opsStack: string[] = []
	// 存储字符串 s 里的数字
	let num: string = ""
	// 比较运算符优先级
	const vMap: Map<string, number> = new Map([
		["+", 1],
		["-", 1],
		["*", 2],
		["/", 2],
		["%", 2],
		["^", 3],
	])

	for (const item of s) {
		switch (item) {
			case "(":
				opsStack.push(item)
				break
			case ")":
				numStack.push(Number(num))
				num = ""
				while (opsStack.length > 0 && opsStack[opsStack.length - 1] !== "(") {
					numStack.push(calc(numStack, opsStack))
				}
				opsStack.length > 0 && opsStack.pop()
				break
			default:
				// 是数字
				if (!isNaN(+item)) num += item
				// 是操作符
				else {
					numStack.push(Number(num))
					num = ""

					while (opsStack.length > 0 && opsStack[opsStack.length - 1] !== "(") {
						if (vMap.get(opsStack[opsStack.length - 1])! >= vMap.get(item)!) {
							numStack.push(calc(numStack, opsStack))
						} else break
					}

					opsStack.push(item)
				}
		}
	}
	num.length > 0 && numStack.push(Number(num))
	while (opsStack.length > 0) {
		console.log("in")
		numStack.push(calc(numStack, opsStack))
	}
	return numStack[0]
}
