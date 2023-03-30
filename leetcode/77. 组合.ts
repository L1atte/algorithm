// 回溯
// 1,  2,  3,  4
// 2 3 4, 1() 3 4, 1() 2() 4 , 1() 2() 3()

function combine(n: number, k: number): number[][] {
	const res: number[][] = [];

	function dfs(path: number[], startIndex: number) {
		if (path.length === k) {
			res.push(Array.from(path));
			return;
		}

		for (let i = startIndex + 1; i <= n; i++) {
			path.push(i);
			startIndex = i;
			dfs(path, startIndex);

			path.pop();
		}
	}

	dfs([], 0);
	return res;
}
