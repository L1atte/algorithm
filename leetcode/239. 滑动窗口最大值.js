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

/**
 * 单调队列法
 * 思路：
 * 1.使用一个队列存储所有滑动窗口中的下标
 * 2.在队列中，这些下标在数组 nums 中对应的值是严格单调递减的
 * 3.当滑动窗口向右移动时候，我们需要把一个新的元素放入队列中。为了保持队列的性质，我们将新元素与队尾的元素相比较，如果前者大于后者，那么移除队尾的元素，直至队列为空或者新元素小于队尾元素
 * 4.由于队列中下表对应的元素是单调递减的，因此此时队首下标对应的元素就是滑动窗口的最大值，与方法一中相同的是，此时的最大值可能在滑动窗口左边界的左侧，并且随着窗口向右移动，他永远不可能出现在滑动窗口中了。此时我们还需要不断从队首弹出元素，直到队首元素在窗口中位置
 */
var maxSlidingWindow1 = function (nums, k) {
	// 定义单调递减的队列
	const queue = [];

	// 存储结果
	const res = [];

	for (let i = 0; i < nums.length; i++) {
		// 当进入滑动窗口的元素大于队尾元素时，将队尾元素弹出
		// 直到滑动窗口的元素小于队尾元素或者队列为空，以保持队列的单调递减的性质
		while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
			queue.pop();
		}

		// 滑动窗口的元素的索引入队
		queue.push(i);
		// 如果队头元素在滑动窗口外，移除队头元素
		while (i - queue[0] >= k) {
			queue.shift();
		}

		// 当达到窗口大小时便开始向结果中添加数据
		if (i >= k - 1) res.push(nums[queue[0]]);
	}

	return res;
};
