/**
 * 思路：
 * 1.从数字的低位到高位，即对数字从右向左遍历，寻找一个数，它大于它的右邻数，标记为 flag
 * 2.重新对数字从右向左遍历，找出第一个大于 flag 的数字，标记为 target，将 flag 和 target 交换
 * 3.令交换后 target 后的数尽量小。
 * 比如，对于 [1,5,2,4,3,2]，我们通过上面的步骤交换 2 和 3 之后，得到数字 1 5 3 4 2 2，则我们需要将 3 以后的数字 422 尽可能小，让它成为 224
 */
var nextPermutation = function (nums) {
	let i = nums.length - 2; // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
	while (i >= 0 && nums[i] >= nums[i + 1]) {
		// 寻找第一个小于右邻居的数
		i--;
	}

	// 如果 i >= 0，表明存在一个数大于它的右邻居，现在我们需要重新从右向左遍历，找出比该数大的数
	if (i >= 0) {
		let j = nums.length - 1;
		while (j > 0 && nums[j] <= nums[i]) {
			j--;
		}
		// 两数交换，实现变大
		[nums[i], nums[j]] = [nums[j], nums[i]];
	}

	// 对 i 右边的数进行交换
	// 因为 i 右边的数字本身是有序的（从大到小排列），现在我们把 flag （小于 nums[j] 且大于 nums[j+1]）交换过去，并不影响原有的单调性
	// 此时头尾交换并向中间逼近即可获取 i 右边序列的最小值
	let l = i + 1;
	let r = nums.length - 1;
	while (l < r) {
		[nums[l], nums[r]] = [nums[r], nums[l]];
		l++;
		r--;
	}
};
