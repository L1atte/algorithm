/**
 * 动态规划
 * 当前列雨水面积：min(左边柱子的最高高度，记录右边柱子的最高高度) - 当前柱子高度
 * 我们把每一个位置的左边最高高度记录在一个数组上（maxLeft），右边最高高度记录在一个数组上（maxRight）
 * 当前位置，左边的最高高度是前一个位置的左边最高高度和本高度的最大值
 * 即从左向右遍历：manLeft = max(height[i], maxLeft[i-1])
 * 从右向左遍历：maxRight = max(height[i], maxRight[i+1])
 * 于是，下标 i 处能接的雨水量就等于 min(leftMax[i], rightMax[i]) - height[i]。遍历每个下标位置即可得到能接的雨水总量
 */

var trap = function (height) {
	const n = height.length;
	if (n === 0) return 0;

	const leftMax = new Array(n).fill(0);
	leftMax[0] = height[0];
	for (let i = 1; i < n; ++i) {
		leftMax[i] = Math.max(leftMax[i - 1], height[i]);
	}

	const rightMax = new Array(n).fill(0);
	rightMax[n - 1] = height[n - 1];
	for (let i = n - 2; i >= 0; --i) {
		rightMax[i] = Math.max(rightMax[i + 1], height[i]);
	}

	let ans = 0;
	for (let i = 0; i < n; ++i) {
		ans += Math.min(leftMax[i], rightMax[i]) - height[i];
	}
	return ans;
};
