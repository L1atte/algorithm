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
