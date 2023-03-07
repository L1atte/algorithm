// x + y = target
// x = target - y
// map<nums[index], index>
function twoSum(nums: number[], target: number): number[] {
	const map: Map<number, number> = new Map();
	const len: number = nums.length;

	for (let i = 0; i < len; i++) {
		// 注意这里的键值对映射关系，因为后面我们是用值去查找对应的下标
		map.set(nums[i], i);
	}

	for (let i = 0; i < len; i++) {
		let temp = target - nums[i];

		if (map.has(temp) && i != map.get(temp)) {
			return [i, map.get(temp)!];
		}
	}
}
