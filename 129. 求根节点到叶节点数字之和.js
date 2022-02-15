/*
 * @Author: Latte
 * @Date: 2022-02-15 08:56:03
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-15 10:08:28
 * @FilePath: \algorithm\129. 求根节点到叶节点数字之和.js
 */

// 广度优先遍历
var sumNumbers = function (root) {
	if (root === null) {
		return 0;
	}
	let sum = 0;
	const nodeQueue = [];
	const numQueue = [];
	nodeQueue.push(root);
	numQueue.push(root.val);
	while (nodeQueue.length) {
		const node = nodeQueue.shift();
		const num = numQueue.shift();
		const left = node.left,
			right = node.right;
		if (left === null && right === null) {
			sum += num;
		} else {
			if (left !== null) {
				nodeQueue.push(left);
				numQueue.push(num * 10 + left.val);
			}
			if (right !== null) {
				nodeQueue.push(right);
				numQueue.push(num * 10 + right.val);
			}
		}
	}
	return sum;
};
