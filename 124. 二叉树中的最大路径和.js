/*
 * @Author: Latte
 * @Date: 2022-01-07 09:17:28
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-07 11:10:48
 * @FilePath: \algorithm\124. 二叉树中的最大路径和.js
 */

/**
 * 思路：
 *  # 最大路径和里面，我们只关心如何求得最大路径，而每一个节点都有可能成功最大路径里的父节点
 *  # 对于一个父节点，由他展开的最大路径和可以表示为：左子树提供的最大和 + 右子树提供的最大和 + 父节点的值
 *  # 那么问题可以继续分解成求子树提供的最大和（这点与父节点的最大路径和不相同），子树在遍历的时候只能在（走入左子树、走入右子树、停在原地）三者选其一。
 *  # 而父节点的最大路径和是：左子树提供的最大和 + 右子树提供的最大和 + 父节点的值，可以同时选择左右子树。
 *
 * 定义递归函数：
 *  # 定义父节点的最大路径和 innerMaxSum，由左子树提供的最大和 + 右子树提供的最大和 + 父节点的值组成
 *  # 分别求左右子树提供的最大和
 *  # 子树最大和分三种情况，
 *    1.路径停在当前子树的根节点，在当前子树的最大收益：root.val
 *    2.走入左子树，在当前子树的最大收益：root.val + dfs(root.left)
 *    3.走入右子树，在当前子树的最大收益：root.val + dfs(root.right)
 *  # 取三者中最大值 root.val+max(0, dfs(root.left), dfs(root.right))
 */

const maxPathSum = (root) => {
	// 最小安全数
	let maxSum = Number.MIN_SAFE_INTEGER;

	const dfs = (root) => {
		if (root === null) {
			// 遍历到 null 节点，收益0
			return 0;
		}

		const left = dfs(root.left); // 左子树提供的最大路径和
		const right = dfs(root.right); // 右子树提供的最大路径和

		const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
		maxSum = Math.max(maxSum, innerMaxSum);

		const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和

		// 如果对外提供的路径和为负，直接返回0，否则正常返回
		return outputMaxSum < 0 ? 0 : outputMaxSum;
	};

	// 递归入口
	dfs(root);

	return maxSum;
};
