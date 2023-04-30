/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
	let cur = root;

	while (cur) {
		if (cur.left) {
			const tmpRight = cur.right; // 保存到临时变量
			cur.right = cur.left; // 覆盖
			cur.left = null; // 变空

			// 寻找最右节点
			let mostRight = cur.right;
			while (mostRight.right) {
				mostRight = mostRight.right;
			}
			//  把临时变量接上
			mostRight.right = tmpRight;
		}

		cur = cur.right;
	}
}
