var preorderTraversal = function (root) {
	const res = [];

	const inOrder = (root) => {
		if (!root) return;

		res.push(root.val);
		inOrder(root.left);
		inOrder(root.right);
	};

	inOrder(root);
	return res;
};
