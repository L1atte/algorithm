// 5 9 11 20
// 4 15 17 30

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const array: number[] = [];

	let p1: number = 0;
	let p2: number = 0;

	while (p1 < nums1.length || p2 < nums2.length) {
		if ((nums1[p1] <= nums2[p2] || p2 >= nums2.length) && p1 < nums1.length) {
			array.push(nums1[p1]);
			p1++;
		} else if ((nums2[p2] < nums1[p1] || p1 >= nums1.length) && p2 < nums2.length) {
			array.push(nums2[p2]);
			p2++;
		}
	}

	let midIndex = Math.floor((nums1.length + nums2.length) / 2);
	let mid = (nums1.length + nums2.length) % 2 === 1 ? array[midIndex] : (array[midIndex] + array[midIndex - 1]) / 2;
  
	return mid;
}
