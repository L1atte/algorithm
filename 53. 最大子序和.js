/*
 * @Author: Latte
 * @Date: 2021-10-12 08:45:59
 * @LAstEditors: Latte
 * @LastEditTime: 2021-11-24 01:14:53
 * @FilePath: \algorithm\53. 最大子序和.js
 */
// 动态规划
/**
 * 动态规划最关键的由三点，一是定义子问题，二是递推基，即问题规模在最简单的情况下是怎样的，三是递推关系
 * 在最大子数组之和问题中，首先定义子问题。我们定义子问题是为了能在最终保存的所有子问题解中获得目标问题解。常见的定义子问题的方式有两种，一是定义目标问题为子问题，二是定义非目标问题为子问题，目标问题的解可以通过所保存的所有子问题的解来获得。
 * 我们首先通过尝试使用第一种方式来定义子问题。我们将目标问题抽象为array[0,n-1]的最大子数组之和maxSubSum(n-1)，其中n表示数组长度。子问题即求array[0,i]的最大子数组之和maxSubSum(i)，我们用数组dp来记录子问题的解。递推基为dp[0]=array[0]。递推关系需要思考maxSubSum(i-1)和maxSubSum(i)的关系。而这样的递推关系很难获得。例如，数组[-2,1,-3,4,-1,2,1,-5,4]递推基为dp[0]=-2，而dp[1]=1, dp[2]=1, dp[3]=4, dp[3]和dp[2]之间的关系并不明确。
 * 故尝试使用第二种方式来定义子问题。我们将子问题定义为求以i为终止下标的子数组之和的最大值，这样最终可以通过比较以0为下标的子数组最大值、以1为下标的子数组最大值......以n-1为下标的子数组最大值获得最终解。我们用数组dp来记录子问题的解。递推基为dp[0]=array[0]。递推关系相比下来就清晰明了多了，当我们对dp[i-1]和array[i]分正负讨论。若dp[i-1]<0, array[i]>0，dp[i]=array[i]，若dp[i-1]<0, array[i]<0, dp[i]=array[i]，若dp[i-1]>0, array[i]<0, dp[i]=dp[i-1]+array[i], 若dp[i-1]>0, array[i]>0, dp[i]=dp[i-1]+array[i]。最后, 原始问题的解即max(dp)。
 * 整个动态规划解法就浮现了。当然递推关系可以简化，dp[i]=max(dp[i-1]+array[i], array[i])。算法时间复杂度为O(n)，空间复杂度为O(n)。
 */
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
[-2, 1, -3, 4, -1, 2, 1, -5, 4];
