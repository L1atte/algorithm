/*
 * @Author: Latte
 * @Date: 2022-02-25 08:34:38
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-28 14:03:29
 * @FilePath: \algorithm\155. 最小栈.js
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.data_stack = [];
	this.min_stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.data_stack.push(val);
	// 如果最小栈为空，或者新元素小于或等于最小栈栈顶，则将新元素压入最小栈
	if (
		!this.min_stack.length ||
		val <= this.min_stack[this.min_stack.length - 1]
	) {
		this.min_stack.push(val);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	// 如果出栈元素和最小栈栈顶元素值相等，最小栈出栈
	if (
		this.data_stack[this.data_stack.length - 1] ==
		this.min_stack[this.min_stack.length - 1]
	) {
		this.min_stack.pop();
	}
	return this.data_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.data_stack[this.data_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
