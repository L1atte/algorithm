/**
 * 求最小深度可以转换为叶子节点中到根节点的最小高度
 * 利用后序遍历，从叶子节点起计算高度，反推回根节点
 * 注意左右节点有一个为空的时候，其高度为另一节点高度 + 1（需要额外判断）
 */
function minDepth(root: TreeNode | null): number {
	const getLength = (node: TreeNode | null): number => {
		if (node === null) return 0

		const leftLength = getLength(node.left)
		const rightLength = getLength(node.right)

		if (node.right === null && node.left) return 1 + leftLength
		else if (node.left === null && node.right) return 1 + rightLength
		else return 1 + Math.min(leftLength, rightLength)
	}

	const res = getLength(root)
	return res
}
