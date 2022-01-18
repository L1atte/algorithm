/*
 * @Author: Latte
 * @Date: 2022-01-18 08:42:34
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-18 08:46:00
 * @FilePath: \algorithm\144. 二叉树的前序遍历.js
 */
var preorderTraversal = function (root) {
	const res = [];

	const inOrder = (root) => {
		if (!root) return;

		res.push(root.val);
		inOrder(root.left);
		inOrder(root.right);
	};

	inOrder(root);
	return res;
};
