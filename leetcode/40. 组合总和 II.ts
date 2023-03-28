// sum, path, startIndex
// 遍历完（或者先把数组排序）
// 1 > 2 > 5 > 10

function combinationSum2(candidates: number[], target: number): number[][] {
	const sortedCandidates = candidates.sort((a, b) => a - b);
	const res: number[][] = [];

	function dfs(sum: number, path: number[], startIndex: number) {
		if (sum > target) return;
		if (sum === target) {
			res.push(path.slice());
			return;
		}

		for (let i = startIndex; i < sortedCandidates.length; i++) {
			const cur = sortedCandidates[i];

			if (i > startIndex && candidates[i] === candidates[i - 1]) {
				//若当前元素和前一个元素相等
				//则本次循环结束，防止出现重复组合
				continue;
			}

			sum += cur;
			path.push(cur);
			dfs(sum, path, i + 1);

			sum -= cur;
			path.pop();
		}
	}

	dfs(0, [], 0);
	return res;
}
