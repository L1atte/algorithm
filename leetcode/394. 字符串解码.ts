// 3
// [
// a
// 2
// [
// c
// ] a + 2*c
// ] 3 * acc
// accaccacc
// number: 存入 num
// [: 将 num 压栈，清空 num，将 str 压栈，清空 str
// string： 存入 str
// ]：从栈中取出 str，num 进行计算
const decodeString: (str: string) => string = (s) => {
	let numStack: number[] = []
	let strStack: string[] = []
	let str: string = ""
	let num: number = 0

	for (const n of s) {
		if (!isNaN(+n)) {
			num = num * 10 + Number(n)
		} else if (n === "[") {
			numStack.push(num)
			strStack.push(str)
			str = ""
			num = 0
		} else if (n === "]") {
			let repeatCount: number = numStack.pop()!

			str = strStack.pop()! + str.repeat(repeatCount)
		} else {
			str += n
		}
	}

	return str
}
