// 4 2 1 3 2
// slow, fast
// 4 , 4
// 2 , 1
// 1 , 2
function findDuplicate(nums: number[]): number {
	let slow = 0;
	let fast = 0;
	while (true) {
		slow = nums[slow];
		fast = nums[nums[fast]];
		if (slow == fast) {
			fast = 0;
			while (true) {
				if (slow == fast) {
					return slow;
				}
				slow = nums[slow];
				fast = nums[fast];
			}
		}
	}
}
