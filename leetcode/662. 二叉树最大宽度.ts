// bfs

let map = new Map<number, number>()
let ans = 0
function widthOfBinaryTree(root: TreeNode | null): number {
	map.clear()
	ans = 0
	dfs(root, 1, 0)
	return ans
}
function dfs(root: TreeNode | null, u: number, depth: number): void {
	if (root == null) return
	if (!map.has(depth)) map.set(depth, u)
	ans = Math.max(ans, u - map.get(depth) + 1)
	u = u - map.get(depth) + 1
	dfs(root.left, u << 1, depth + 1)
	dfs(root.right, (u << 1) | 1, depth + 1)
}

