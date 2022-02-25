/*
 * @Author: Latte
 * @Date: 2022-02-25 08:34:38
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-25 08:42:40
 * @FilePath: \algorithm\155. 最小栈.js
 */
var MinStack = function () {
	this.stack = [];
	this.stack.push([]);
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.stack.push([...val]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	if (!this.stack.length) return;

	return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	if (!this.stack.length) return;

	const tempArr = this.stack.flat(1);
	tempArr.sort((a, b) => {
		a - b;
	});
	return tempArr[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
