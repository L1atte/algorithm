/*
 * @Author: Latte
 * @Date: 2021-10-12 08:45:59
 * @LAstEditors: Latte
 * @LastEditTime: 2021-11-24 00:29:09
 * @FilePath: \algorithm\53. 最大子序和.js
 */
// 动态规划
let maxSubArray = function (nums) {
	// 数组长度，dp初始化
	let [len, dp] = [nums.length, [nums[0]]];

	// 最大值初始化dp[0]
	let max = dp[0];
	for (let i = 1; i < len; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

		// 更新最大值
		max = Math.max(max, dp[i]);
	}

	return max;
};

// 贪心算法
/*
 * 	题目要求我们只求最优解，即获取最大的值，那么很容易会考虑到贪心算法
 * 	我们需要考虑到贪心抛弃，当你的sum值加到负值(为0其实也可以抛弃，因为没有用处)的时候，那么前面的子串和后面的字符组合只会造成负面影响(贪心负影响,通俗的说就是前面子串和后面组合还不如后面本身大)，
 * 	因此，我们贪心地舍弃掉前面的子串，重新建立子串找最大值
 * */
let maxSubArrays = function (nums) {
	// 遍历数组，
	const length = nums.length;
	let sum = 0;
	let max = nums[0];
	for (let i = 0; i < length; i++) {
		sum = sum + nums[i];
		max = Math.max(max, sum);

		if (sum < 0) {
			sum = 0;
		}
	}
	return max;
};

let arr = [-2, 1, 6, 5, -6];
console.log(maxSubArray(arr));
