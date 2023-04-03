// 1,   2,   2(和之前重复)

// 2  2(和之前重复),  2

// 2
function subsetsWithDup(nums: number[]): number[][] {
	const res: number[][] = [];
	const sortNums = nums.sort((a, b) => {
		return a - b;
	});

	function dfs(path: number[], startIndex: number): void {
		res.push(path.slice());

		if (path.length === sortNums.length) return;

		for (let i = startIndex; i < sortNums.length; i++) {
			// 和之前重复
			if (i > startIndex && nums[i] === nums[i - 1]) continue;

			path.push(sortNums[i]);
			dfs(path, i + 1);
			path.pop();
		}
	}

	dfs([], 0);

	return res;
}
