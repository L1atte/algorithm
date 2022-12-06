var isValidBST = function (root) {
	// 维护一个 pre，表示“当前遍历节点的前一个节点”，如果前一个节点大于等于当前节点，则表明这棵树的中序遍历过程中出现了乱序的情况，跳出遍历过程、return false
	let pre = -Infinity
	const inOrder = (root) => {
		if (root === null) return true
		let left = inOrder(root.left)

		if (pre >= root.val) return false
		pre = root.val

		let right = inOrder(root.right)
		return left && right
	}
	return inOrder(root)
}
