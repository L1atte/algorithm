// 1      2      3
// 1 2 3
//   3. 2

function permute(nums: number[]): number[][] {
	const res: number[][] = [];

	function dfs(path: number[]) {
		if (path.length === nums.length) {
			res.push([...path]);
		}

		for (let i = 0; i < nums.length; i++) {
			const item = nums[i];
			if (path.includes(item)) {
				continue;
			}

			path.push(item);
			dfs(path);
			path.pop();
		}
	}

	dfs([]);
	return res;
}
