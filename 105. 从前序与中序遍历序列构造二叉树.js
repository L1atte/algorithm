/*
 * @Author: Latte
 * @Date: 2022-01-28 09:37:09
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-28 12:06:31
 * @FilePath: \algorithm\105. 从前序与中序遍历序列构造二叉树.js
 */

/**
 * 思路：
 * 1.前序遍历的顺序为：根节点>递归遍历左子树>递归遍历右子树
 * 2.中序遍历的顺序为：递归遍历左子树>根节点>递归遍历右子树
 * 3.先从前序遍历的结果里获取根节点，再利用根节点在中序遍历的结果里划分左子树和右子树。
 * 4.切割中序遍历的时候，用根节点作为切割点
 * 5.切割前序遍历的时候，由于前序遍历缺少明确的切割点，但是我们可以通过左子树长度确定且唯一的特点，利用长度来切割数组
 * 6.对以上的左右子树循环进行第3点，直到不存在子树
 */
var buildTree = function (preorder, inorder) {
	if (!preorder.length) return null;

	let root = new TreeNode(preorder[0]);
	let rootIndex = inorder.indexOf(preorder[0]);

	root.left = buildTree(
		preorder.slice(1, rootIndex + 1),
		inorder.slice(0, rootIndex)
	);
	root.right = buildTree(
		preorder.slice(rootIndex + 1, preorder.length),
		inorder.slice(rootIndex + 1, inorder.length)
	);

	return root;
};
