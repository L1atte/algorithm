/**
 * 判断对称二叉树实际上是判断左右子树是否相等
 * 所以需要先判断左右子节点是否相等，然后才能确定当前节点是否相等
 * 因此采用后序遍历
 */
var isSymmetric = function (root) {
	var compare = function (left, right) {
		if ((left == null && right != null) || (left != null && right == null)) {
			return false
		} else if (left == null && right == null) {
			return true
		} else if (left.val != right.val) {
			return false
		}
		//剩下的情况便是两侧有值并且相等，那么就进行下一步递归

		const outside = compare(left.left, right.right)
		const inside = compare(left.right, right.left)
		return inside && outside
	}

	return compare(root.left, root.right)
}
