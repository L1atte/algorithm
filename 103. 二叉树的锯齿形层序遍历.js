/*
 * @Author: Latte
 * @Date: 2021-10-27 08:36:37
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-27 09:42:06
 * @FilePath: \algorithm\103. 二叉树的锯齿形层序遍历.js
 */
let zigzagLevelOrder = function (root) {
	let queue = [],
		res = [],
		flag = 0; // flag为偶数则表示从左往右遍历，为奇数则表示从右往左遍历

	queue.push(root);
	if (root === null) return res;
	while (queue.length !== 0) {
		let length = queue.length;
		let curLevel = [];

		for (let i = 0; i < length; i++) {
			let curNode;
			curNode = queue.shift();
			curLevel.push(curNode.val);

			// 从左往右遍历
			if (curNode.left) queue.push(curNode.left);
			if (curNode.right) queue.push(curNode.right);
		}
		// 需要从右往左遍历的时候，反转当前层级
    if(flag % 2 === 1) {
      curLevel.reverse()
    }
		res.push(curLevel);
		flag++;
	}
	return res;
};
