/*
 * @Author: Latte
 * @Date: 2021-10-18 08:31:29
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-30 09:04:39
 * @FilePath: \algorithm\102. 二叉树的层序遍历.js
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	let res = [],
		queue = [];
	queue.push(root);

	if (root === null) return res;

	while (queue.length !== 0) {
		// 记录当前层级节点数
		let length = queue.length;
		// 存放每一层的节点
		let curLevel = [];
		for (let i = 0; i < length; i++) {
			let node = queue.shift();
			curLevel.push(node.val);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		// 把每一层的结果放到结果数组
		res.push(curLevel);
	}
	return res;
};
