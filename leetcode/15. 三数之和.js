/**
 * 思路
 * 1. 先将数组进行排序
 * 2. 从左侧开始，选定一个值为定值
 * 3. 右侧类似于快排，定义首和尾
 * 4. 首尾与定值相加，定义和sum
 *  sum = 0
 *    记录这三个值
 *  sum < 0
 *    首部右移
 *  sum > 0
 *    尾部左移
 * 5. 定值右移，重复该步骤
 *
 * 难点
 * 1. 如何对结果进行去重
 * 2. 去重情况
 *  如果 nums[i] == nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
 *  当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
 * 当 sum == 0 时，nums[R] == nums[R−1] 则会导致结果重复，应该跳过，R--
 */
let threeSum = function (nums) {
	nums.sort((a, b) => a - b);
	let res = [];
	let len = nums.length;

	if (nums === null || len < 3) return res;

	for (let i = 0; i < len; i++) {
		if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
		if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

		let left = i + 1;
		let right = len - 1;
		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];
			if (sum === 0) {
				res.push([nums[i], nums[left], nums[right]]);
				while (left < right && nums[left] === nums[left + 1]) left++; // 去重
				while (left < right && nums[right] === nums[right - 1]) right--; // 去重
				left++;
				right--;
			} else if (sum < 0) left++;
			else if (sum > 0) right--;
		}
	}

	return res;
};

let nums = [0, 0, 0, 0];
let res = threeSum(nums);
console.log(res);
