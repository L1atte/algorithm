var isValidBST = function (root) {
	let baseVal = -Infinity // 初始化 baseVal 为负无穷
	let res = true // 结果
	// traverse函数 同方法1
	let traverse = function (root) {
		if (root == null) return
		traverse(root.left)
		if (baseVal >= root.val) {
			res = false
			return
		} else {
			baseVal = root.val
		}
		traverse(root.right)
	}
	traverse(root)
	return res
}
