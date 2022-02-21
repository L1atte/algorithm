/*
 * @Author: Latte
 * @Date: 2022-02-21 08:38:13
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-21 13:57:21
 * @FilePath: \algorithm\239. 滑动窗口最大值.js
 */

/**
 * 暴力解法
 */
var maxSlidingWindow = function (nums, k) {
	let n = nums.length;
	if (n == 0) return [];
	let res = [];
	for (let i = 0; i < n - k + 1; i++) {
		let max = Number.MIN_SAFE_INTEGER;
		for (let j = i; j < i + k; j++) {
			max = Math.max(max, nums[j]);
		}
		res.push(max);
	}
	return res;
};
