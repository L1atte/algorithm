/*
 * @Author: Latte
 * @Date: 2021-11-09 09:16:26
 * @LAstEditors: Latte
 * @LastEditTime: 2021-11-09 11:51:36
 * @FilePath: \algorithm\5. 最长回文子串.js
 */
// 中心扩散法
/**
 * 思路
 *  1.回文串一定是中心对称的
 *  2.每次选择一个中心点，从中心点向两边扩散，比较左右两边字符串是否相等
 *  3.中心点的选取有两种情况
 *    3.1回文子串长度为奇数，则中心点为元素本身
 *    3.2回文子串长度为偶数，则中心点为相邻两个元素
 */
let longestPalindrome = function (s) {
	if (!s || s.length < 2) {
		return s;
	}

	let res = "";

	// 中心扩散法
	let centerExpand = (left, right) => {
		while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
			left--;
			right++;
		}
		// 注意此处的 left，right的值循环后，是恰好不满足循环条件的时刻
		// 这里 left 到 right 的距离应该是 right-left+1，但是 left， right两个边界不能取，所以应该是取 left+1 到 right-1的距离，即 right-left-1
		let len = right - left - 1;
		if (len > res.length) {
			// slice也要去[left+1, right-1]这个区间
			res = s.slice(left + 1, right);
		}
	};

	for (let i = 0; i < s.length; i++) {
		// 回文子串长度是奇数
		centerExpand(i, i);
		// 回文子串长度是偶数
		centerExpand(i, i + 1);
	}

	return res;
};
