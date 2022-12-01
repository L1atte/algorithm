var subsets = function (nums) {
	const result = []
	const path = []

	const dfs = (startIndex) => {
		result.push(path.slice())
		for (let i = startIndex; i < nums.length; i++) {
			path.push(nums[i])
			dfs(i + 1)
			path.pop()
		}
	}

	dfs(0)
	return result
}
