// left, right
// right - left <= k
// when right - left === k, left++
// otherwise right++
// when nums[right] === nums[left], return true

function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const set: Set<number> = new Set();
	const length: number = nums.length;
	for (let i = 0; i < length; i++) {
		if (i > k) {
			set.delete(nums[i - k - 1]);
		}
		if (set.has(nums[i])) {
			return true;
		}
		set.add(nums[i]);
	}
	return false;
}
