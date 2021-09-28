/*
 * @Author: Latte
 * @Date: 2021-09-28 11:30:16
 * @LAstEditors: Latte
 * @LastEditTime: 2021-09-28 17:44:06
 * @FilePath: \algorithm\快速排序.js
 */
function quickSort(array, start, end) {
	let length = array.length;

	// 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
	if (!Array.isArray(array) || length <= 1 || start >= end) return;

	// 将数组分为两部分，并返回右部分的第一个元素的索引值
	let index = partition(array, start, end);
	quickSort(array, start, index - 1); // 递归排序左半部分
	quickSort(array, index + 1, end); // 递归排序右半部分
}

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

let nums = [3, 2, 1, 5, 6, 4];
quickSort(nums, 0, 5);
console.log(nums);
