class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

// 前序遍历
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (root === null) return false

	const dfs = (node: TreeNode, sum: number) => {
		sum += node.val
		if (!node.left && !node.right && sum === targetSum) return true
		else if (!node.left && !node.right) return false

		if (node.left && dfs(node.left, sum)) return true
		if (node.right && dfs(node.right, sum)) return true

		return false
	}

	return dfs(root, 0)
}
