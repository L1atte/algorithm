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
