/**
 * 思路：prev初始为第一个区间，cur表示当前区间，res表示结果数组
 * 1.开始遍历，尝试合并prev和cur，合并后更新到prev
 * 2.合并后的新区间还可能和后面的区间重合，继续尝试合并新的cur，更新给prev
 * 3.直到不能合并——prev[1] < cur[0]，此时，将prev区间推入res数组
 * 
 * 合并的策略
 * 1.原则上要更新 prev[0] 和 prev[1]，即左右端点
 *   1.1.prev[0] = min(prev[0], cur[0])
 *   1.2.prev[1] = max(prev[1], cur[1])
 * 2.但如果先按区间的左端排升序，就能保住 prev[0] < cur[0]
 * 3.所以合并只需要：prev[1] = max(prev[1], cur[1])
 */

 var merge = function (intervals) {
	let res = [];
	intervals.sort((a, b) => a[0] - b[0]);

	let prev = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		let cur = intervals[i];
		if (prev[1] >= cur[0]) {
			// 有重合
			prev[1] = Math.max(cur[1], prev[1]);
		} else {
			// 不重合，prev推入res数组
			res.push(prev);
			prev = cur; // 更新 prev
		}
	}

	res.push(prev);
	return res;
};