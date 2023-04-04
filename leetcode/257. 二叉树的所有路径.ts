// 1
// 2, 3
// 5
function binaryTreePaths(root: TreeNode | null): string[] {
	const res: string[] = [];

	function dfs(node: TreeNode | null, path: number[]) {
		if (node) {
			path.push(node.val);

			if (!node.left && !node.right) {
				res.push(path.slice().join("->"));
				return;
			}

			if (node.left) {
				dfs(node.left, path);
				path.pop();
			}
			if (node.right) {
				dfs(node.right, path);
				path.pop();
			}
		}
	}

	dfs(root, []);
	return res;
}
