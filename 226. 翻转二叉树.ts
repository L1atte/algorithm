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

// 先根遍历
// 先交换左右节点，然后递归遍历左右节点
function invertTree(root: TreeNode | null): TreeNode | null {
	if (root === null) return null

	const temp: TreeNode = root.left!
	root.left = root.right
	root.right = temp

	invertTree(root.left)
	invertTree(root.right)

	return root
}

// 层序遍历
// 建立一个队列
// 取出当前层的节点，交换其左右节点
// 队列为空即结束
function invertTree1(root: TreeNode | null): TreeNode | null {
	if (root === null) return null

	const queue: Array<TreeNode> = []
	queue.push(root)

	while (queue.length) {
		const length = queue.length

		for (let i = 0; i < length; i++) {
			const node: TreeNode = queue.shift()!

			const temp: TreeNode | null = node.left
			node.left = node.right
			node.right = temp

			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
		}
	}

	return root
}
