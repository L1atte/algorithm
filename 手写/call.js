/**
 * 思路
 * 1.将函数设为对象的属性
 * 2.执行该函数
 * 3.删除该函数
 */

Function.prototype.call = function (thisArg, ...args) {
	/**
	 * 判断参数中 this 的类型，call()函数在 thisArg 参数为 undefined 或者 null 时，会将 thisArg 自动指向全局对象
	 * 浏览器环境下全局对象为 window，NODE 环境下全局对象为 global
	 */
	if (thisArg === undefined || thisArg === null) {
		thisArg = window !== undefined ? window : global
	}

	// 在 call 函数中，thisArg 为原始值时会被包装
	thisArg = Object(thisArg)

	// 为了避免覆盖 thisArg 上的同名属性，使用 symbol 生成唯一值
	const fnKey = Symbol()

	// 将函数绑定到 thisArg 上
	thisArg[fnKey] = this

	// 执行函数
	const res = thisArg[fnKey](...args)

	// 删除在 thisArg 上添加的属性
	delete thisArg[fnKey]

	// 返回结果
	return res
}
