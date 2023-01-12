const binarySearchLeft = (nums, target) => {
	let left = -1,
		right = nums.length
	while (left + 1 != right) {
		const mid = Math.floor((left + right) / 2)
		if (nums[mid] >= target) {
			right = mid
		} else {
			left = mid
		}
	}
	return right
}

const binarySearchRight = (nums, target) => {
	let left = -1,
		right = nums.length
	while (left + 1 != right) {
		const mid = Math.floor((left + right) / 2)
		if (nums[mid] > target) {
			right = mid
		} else {
			left = mid
		}
	}
	return left
}

var searchRange = function (nums, target) {
	let ans = [-1, -1]
	const leftIdx = binarySearchLeft(nums, target)
	const rightIdx = binarySearchRight(nums, target)
	if (
		leftIdx <= rightIdx &&
		rightIdx < nums.length &&
		nums[leftIdx] === target &&
		nums[rightIdx] === target
	) {
		ans = [leftIdx, rightIdx]
	}
	return ans
}
