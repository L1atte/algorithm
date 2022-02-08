/*
 * @Author: Latte
 * @Date: 2022-01-27 10:51:50
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-30 15:01:42
 * @FilePath: \algorithm\4. 寻找两个正序数组的中位数.js
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const arr = [...nums1, ...nums2].sort((a, b) => a - b);

	let mid = arr.length / 2;
	if (arr.length % 2 === 0) {
		return (arr[mid] + arr[mid - 1]) / 2;
	} else {
		mid = Math.floor(mid);
		return arr[mid];
	}
};
