// 这里的快排顺序遍历法，https://segmentfault.com/a/1190000004410119#articleHeader2 有相关介绍
let quickSort = (arr, left, right) => {
	let len = arr.length;
	if (!Array.isArray(arr) || len <= 1) return;

	if (left < right) {
		let index = partition(arr, left, right);
		quickSort(arr, left, index - 1);
		quickSort(arr, index + 1, right);
	}
	return arr;
};

let partition = (arr, left, right) => {
	// 记录中间索引
	let mid = Math.floor((left + right) / 2);
	let pivot = arr[mid];
	let storeIndex = left;
	// 交换pivot与arr[right]
	[arr[mid], arr[right]] = [arr[right], arr[mid]];

	/**
	 * 遍历数组，将left向后移动，当遇到a[left] < pivot的情况时，则交换 arr[storeIndex] 与 arr[left] ，并且将storeIndex向后移动一位。
	 * 这一步比较抽象，可以理解为将小于 pivot 的元素通过与 arr[storeIndex] 交换，集中放在了一块
	 * 当数组遍历完成之后，数组会形成两部分，前半部分小于 pivot，后半部分大于 pivot，两部分的分界线即为索引 storeIndex
	 * 此时交换pivot与arr[storeIndex],即可形成以pivot为分界线，左半部分小于pivot，右半部分大于pivot。完成这次快排
	 */
	for (; left < right; left++) {
		if (arr[left] < pivot) {
			[arr[storeIndex], arr[left]] = [arr[left], arr[storeIndex]];
			storeIndex++;
		}
	}
	[arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
	return storeIndex;
};

let nums = [3, 2, 1, 5, 551, 6, 4];
quickSort(nums, 0, 6);
console.log(nums);