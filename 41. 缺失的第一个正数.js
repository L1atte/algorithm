/*
 * @Author: Latte
 * @Date: 2022-02-28 09:27:06
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-28 09:41:08
 * @FilePath: \algorithm\41. 缺失的第一个正数.js
 */
var firstMissingPositive = function (nums) {
	const flag = [];
	for (let i = 0; i < nums.length; i++) {
		flag[nums[i]] = 1;
	}

	let j = 1;
	while (true) {
		if (flag[j] !== 1) {
			return j;
		}
		j++;
	}
};
