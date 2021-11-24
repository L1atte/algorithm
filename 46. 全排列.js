/*
 * @Author: Latte
 * @Date: 2021-11-17 08:43:44
 * @LAstEditors: Latte
 * @LastEditTime: 2021-11-24 09:38:57
 * @FilePath: \algorithm\46. 全排列.js
 */
var permute = function (nums) {
	const result = [];
	const user = {};

	function dfs(path) {
		if (path.length === nums.length) {
			// 个数选购了
			result.push(path.slice); // 拷贝一份path，加入解集res
			return; // 结束当前分支递归
		}
		for (const num of nums) {
			// for枚举出每个可选的选项
			// if (path.includes(num)) continue; // 别这么写！查找是O(n)，增加时间复杂度
			if (used[num]) continue;

			path.push(num);
			used[num] = true;
			dfs(path);
			path.pop();
			used[num] = false;
		}
	}
	dfs([]); // 递归的入口，空path传进去
	return res;
};
