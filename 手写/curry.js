function curry(fn) {
	return function (...args) {
		// 如果参数超出一个，报错
		if (args.length > 1) {
			throw new Error("只能传递一个参数")
		}

		// 当fn.length为1的时候，代表是最后一次调用函数了
		if (fn.length === 1) {
			return fn.apply(this, args) // 调用函数返回结果
		} else {
			// 如果还是缺少参数，则返回函数继续调用
			return curry(fn.bind(this, ...args))
		}
	}
}

const add = function (a, b, c, d) {
	return a + b + c + d
}
const curryAdd = curry(add)
console.log(add(1, 2, 3, 4)) // 10
console.log(curryAdd(1)(2)(3)) // 10


