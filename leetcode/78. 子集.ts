// 回溯
// 1 2 3
// 2 3, 1 3, 1 2

function subsets(nums: number[]): number[][] {
	const res: number[][] = [];

	function dfs(path: number[], startIndex: number) {
		res.push(path.slice());

		if (path.length === nums.length) return;

		for (let i = startIndex + 1; i < nums.length; i++) {
			path.push(nums[i]);
			startIndex = i;
			dfs(path, startIndex);
			path.pop();
		}
	}

	dfs([], -1);
	return res;
}
