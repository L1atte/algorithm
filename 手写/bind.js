Function.prototype.myBind = function (thisArg, ...args) {
	// this指向的是fn
	const self = this
	// 返回绑定函数
	return function () {
		// 包装了原函数对象
		return self.apply(thisArg, args)
	}
}
