// 回溯
// head
// 1 1(exclude) 2
// 12， 12, 11，(exclude)
// 2, 1, 2, 1, 1, 1,

// 1 1 2
// 1 1 2, 1 1 2, 1 1 2
// .......

function permuteUnique(nums: number[]): number[][] {
	const res: number[][] = [];
	nums.sort((a, b) => a - b);

	const dfs = (path: number[], used: number[]) => {
		if (path.length == nums.length) {
			res.push(path.slice());
			return;
		}

		for (let i = 0; i < nums.length; i++) {
			if (used.includes(i)) {
				continue;
			}
			if (i - 1 >= 0 && nums[i - 1] == nums[i] && !used.includes(i - 1)) {
				// 避免产生重复的排列
				continue;
			}
			path.push(nums[i]); // make a choice
			used.push(i); // 记录路径上做过的选择
			dfs(path, used); // explore，基于它继续选，递归
			path.pop(); // undo the choice
			used.pop(); // 也要撤销一下对它的记录
		}
	};

	dfs([], []);
	return res;
}
