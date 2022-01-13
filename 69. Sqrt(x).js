/*
 * @Author: Latte
 * @Date: 2022-01-13 08:50:25
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-13 08:51:45
 * @FilePath: \algorithm\69. Sqrt(x).js
 */
var mySqrt = function (x) {
	if (x === 0) return 0;
	if (x === 1) return 1;

	for (let i = 1; i <= x; i++) {
		if (i * i > x) {
			return i - 1;
		}
	}
};

/**
 * 二分法
 * 1.除0之外的所有整数的平方根都大于或等于1
 * 2.取 1~x 范围内的中值 mid，并判断mid的平方与 x 的关系
 * 3.mid * mid > x：则 x 的平方根小于 mid，接下来搜索 1~mid-1 的范围
 * 4.mid * mid < x，则 x 的平方根大于 mid，且(mid+1)^2 > x，则 mid 是 x 的平方根
 * 4.mid * mid < x，则 x 的平方根大于 mid，接下来搜索 mid+1~x 的范围
 */
var mySqrt = function (x) {
	let left = 1,
		right = x;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		// 判断mid的平方是否小于或等于x，如果mid的平方小于x
		if (mid * mid <= x) {
			// 判断(mid+1)的平方是否大于x，如果(mid+1)的平方大于x，那么mid就是x的平方根
			if ((mid + 1) * (mid + 1) > x) {
				return mid;
			}
			// 如果mid的平方小于x并且(mid+1)的平方小于x，那么x的平方根比mid大，接下来搜索从mid+1到x的范围
			left = mid + 1;
		} else {
			// 如果mid的平方大于x，则x的平方根小于mid，接下来搜索1到mid-1的范围
			right = mid - 1;
		}
	}
	// 如果输入参数是0，left等于1而right等于0，就直接返回0
	return 0;
};
