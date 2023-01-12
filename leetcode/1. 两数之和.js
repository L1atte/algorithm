let twoSum = function (nums, target) {
	let left,
		right,
		len = nums.length;
	let res = [];

	if (nums === null || len < 2) return res;

	for (left = 0; left < len - 1; left++) {
		for (right = left + 1; right < len; right++) {
			const sum = nums[left] + nums[right];
			if (sum === target) {
				res.push(left, right);
				return res;
			}
		}
	}
	return res;
};

// 使用map解构降低时间复杂度
let twoSumWithMap = function (nums, target) {
	let map = new Map(),
		len = nums.length;

	for (let i = 0; i < len; i++) {
		// 注意这里的键值对映射关系，因为后面我们是用值去查找对应的下标
    map.set(nums[i], i);
	}

	for (let i = 0; i < len; i++) {
		let temp = target - nums[i];

		if (map.has(temp) && i != map.get(temp)) {
			return [i, map.get(temp)];
		}
	}
};

// 进一步优化，就要深入细节了。比如有一个表超级大，但前两个元素就能够满足题目要求。在上述解法中，依然要建一个完整的哈希表，空间占用一点没省下来，理想解法是边查边存
let twoSumWithMap2 = function (nums, target) {
	let map = new Map(),
		len = nums.length;

	for (let i = 0; i < len; i++) {
		let temp = target - nums[i];

		if (map.has(temp) && i != map.get(temp)) {
			return [i, map.get(temp)];
		}

    // 边查边存，注意这里的键值对映射关系
    map.set(num[i], i)
	}
};

let arr = [3, 2, 4];
console.log(twoSum(arr, 6));
console.log(twoSumWithMap(arr, 6));
