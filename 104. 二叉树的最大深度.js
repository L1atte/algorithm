/*
 * @Author: Latte
 * @Date: 2022-02-10 08:45:38
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-10 09:49:25
 * @FilePath: \algorithm\104. 二叉树的最大深度.js
 */

/**
 * 思路：
 *   利用层序遍历的特点，在遍历每个层级的时候记录 depth
 * 
 * 层级遍历：
 * 1.构造一个队列 queue，队列存放当前层级的节点
 * 2.遍历当前队列，将队列的节点依次出队
 * 3.如果出队的节点存在左右子树，则将子树存入队列，准备下一层级的遍历
 * 4.循环上述操作，直到队列不存在节点（即当前层级不存在节点，遍历结束）
 */
var maxDepth = function (root) {
	let depth = 0,
		queue = [];
	queue.push(root);

	if (root === null) return depth;

	while (queue.length !== 0) {
		// 记录当前层级节点数，这点很重要，因为在后面的当前层级的遍历的时候，会涉及到 queue 的操作，导致 queue.length 不稳定，（易错点）
		let length = queue.length;
		// 遍历当前层级的节点
		for (let i = 0; i < length; i++) {
			let node = queue.shift();
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		// 完成一次遍历等于深度 +1
		depth++;
	}
	return depth;
};
