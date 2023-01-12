// 回溯算法
// 因为数字可以无限选取，所以在 backtrack 里遍历的时候，当前元素的索引不加一
function combinationSum(candidates: number[], target: number): number[][] {
	const res: number[][] = []

	const backtrack = (path: number[], sum: number, index: number): void => {
		if (sum > target) return
		if (sum === target) {
			res.push(path.slice())
			return
		}

    // 索引 i 不加一，因为当前元素可以被无限选取
		for (let i = index; i < candidates.length; i++) {
			path.push(candidates[i])
			sum += candidates[i]

			backtrack(path, sum, i)

			path.pop()
			sum -= candidates[i]
		}
	}

	backtrack([], 0, 0)
	return res
}
