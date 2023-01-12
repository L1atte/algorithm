/**
 * 回溯算法1
 */
var pathSum = function (root, targetSum) {
	const res = [];

	if (!root) return res;

	const backtrack = (node, path) => {
		let sum = 0;
		path.forEach((item) => (sum = sum + item));

		if (sum === targetSum && !node.left && !node.right) {
			res.push(path.slice());
			return;
		}

		if (!node.left && !node.right) {
			return;
		}

		if (node.left) {
			path.push(node.left.val);
			backtrack(node.left, path);
			path.pop();
		}

		if (node.right) {
			path.push(node.right.val);
			backtrack(node.right, path);
			path.pop();
		}

		return;
	};

	backtrack(root, [root.val]);

	return res;
};

/**
 * 优化后
 * 回溯算法2
 */
var pathSum = function (root, targetSum) {
	const res = [];

	if (!root) return res;

	const backtrack = (node, path, sum) => {
		sum = sum + node.val;
		if (sum === targetSum && !node.left && !node.right) {
			res.push(path.slice());
			return;
		}

		if (!node.left && !node.right) {
			return;
		}

		if (node.left) {
			path.push(node.left.val);
			backtrack(node.left, path, sum);
			path.pop();
		}

		if (node.right) {
			path.push(node.right.val);
			backtrack(node.right, path, sum);
			path.pop();
		}

		return;
	};

	backtrack(root, [root.val], 0);
	return res;
};
