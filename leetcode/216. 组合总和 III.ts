// 1 ~ 9
// 2~9... 1..9 ...
// ...

// sum, path, length,
// 回溯算法避免重复路径的方法：记录当前路径 index —— 如下面的 startIndex

function combinationSum3(k: number, n: number): number[][] {
	const res: number[][] = [];

	function dfs(sum: number, path: number[], startIndex: number) {
		// [x,y,z] [x,z,y]
		if (path.length === k && sum === n) {
			res.push(path.slice());
			return;
		}

		for (let i = startIndex + 1; i <= 9; i++) {
			// 当前 i 不在 path 内，且 sum < n，且 path.length < k
			if (!path.includes(i) && sum < n && path.length < k) {
				sum += i;
				path.push(i);
				dfs(sum, path, i);

				sum -= i;
				path.pop();
			}
		}
	}

	dfs(0, [], 0);
	return res;
}
