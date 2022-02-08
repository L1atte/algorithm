/*
 * @Author: Latte
 * @Date: 2022-02-08 08:50:23
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-08 10:52:08
 * @FilePath: \algorithm\76. 最小覆盖子串.js
 */
var minWindow = function (s, t) {
	let minLen = s.length + 1;
	let start = s.length; // 结果子串的起始位置
	let missType = 0; // 当前缺失的字符串种类数
	let map = {}; // 储存目标字符串和对应的缺失个数

	// 记录需要的字符串，map[i] 表示目标字符的缺失个数，比如 t 为 baac 的时候，map 为 {a: 2,b: 1,c: 1}
	for (const c of t) {
		if (!map[c]) {
			missType++;
			map[c] = 1;
		} else {
			map[c]++;
		}
	}

	// 定义左右指针
	let l = 0,
		r = 0;
	for (; r < s.length; r++) {
		let rightChar = s[r];
		if (map[rightChar] !== undefined) map[rightChar]--; // 是目标字符，则它的缺失个数 -1
		if (map[rightChar] === 0) missType--; // 如果缺失个数为 0，则缺失种类 -1

		while (missType === 0) {
			// 当缺失种类为 0 时，即所有目标字符串都已找到，开始收缩窗口，左指针向右移动
			if (r - l + 1 < minLen) {
				minLen = r - l + 1; // 如果窗口宽度小于 minLen，更新 minLen
				start = l; // 更新窗口起点
			}
			let leftChar = s[l]; // 左指针向右移动，左指针指向的字符要被丢弃
			if (map[leftChar] !== undefined) map[leftChar]++; // 被丢弃的是目标字符，缺失个数 +1
			if (map[leftChar] > 0) missType++; // 如果字符的缺失个数 > 0,缺失种类 +1
			l++; // 左指针右移
		}
	}
	if (start === s.length) return "";
	return s.substring(start, start + minLen); // 根据起点和minLen截取子串
};
