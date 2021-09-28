/*
 * @Author: Latte
 * @Date: 2021-09-28 08:30:14
 * @LAstEditors: Latte
 * @LastEditTime: 2021-09-28 17:43:33
 * @FilePath: \algorithm\215. 数组中的第K个最大元素.js
 */
const bubbleSort = (array) => {
	if (array.length < 2) {
		return array;
	}
	for (let i = 0, len = array.length; i < len - 1; i++) {
		for (let j = 0, len = array.length; j < len - i - 1; j++) {
			if (array[j] < array[j + 1]) {
				[array[j + 1], array[j]] = [array[j], array[j + 1]];
			}
		}
	}
	return array;
};

/**
 * 在每次递归快速排序之前，比较当前枢纽值的下标 index 与 n-k 的大小
 *   index < n-k
 *     第k个最大值在枢纽值的右边，只需要递归枢纽值右边的子序列即可
 *   index = n-k
 *     第k个最大值即为枢纽值
 *   index > n-k
 *     第k个最大值在枢纽值的左边，只需要递归枢纽值左边的子序列即可
 *
 * @param {*} array
 * @param {*} k
 */
let findKthLargest = function (nums, k) {
	let target = nums.length - k;
	let left = 0;
	let right = nums.length - 1;
	while (true) {
		let p = partition(nums, left, right);
		if (p === target) return nums[p];
		else if (p < target) left = p + 1;
		else right = p - 1;
	}
};

function partition(array, start, end) {
	let pivot = array[start];

	// 当start = end 时结束循环
	while (start < end) {
		// 当 end 指针指向的值大于等于枢纽值时， end 指针向前移动
		while (array[end] >= pivot && start < end) {
			end--;
		}

		// 将比枢纽值小的值交换到 start 位置
		array[start] = array[end];

		// 当 start 指针指向的值小于等于枢纽值时， start 指针向后移动
		while (array[start] < pivot && start < end) {
			start++;
		}

		// 将比枢纽值大的值交换到 end 位置，进行下一次循环
		array[end] = array[start];
	}

	// 将枢纽值交换到中间点，此时 start = end
	array[start] = pivot;

	// 返回中间索引值
	return start;
}

let nums1 = [3, 2, 1, 5, 6, 4],
	nums2 = [3, 2, 1, 5, 6, 4],
	k = 2;
let bubbleSortRes = bubbleSort(nums1);
console.log("bubbleSortRes", bubbleSortRes[k - 1]);
let quickSortRes = findKthLargest(nums2, k);
console.log("quickSortRes", quickSortRes);
