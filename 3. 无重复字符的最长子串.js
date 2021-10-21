/*
 * @Author: Latte
 * @Date: 2021-09-26 10:32:25
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-21 21:13:49
 * @FilePath: \algorithm\3. 无重复字符的最长子串.js
 */

/**
 * @description: 时间复杂度O(n^2) 空间复杂度O(n)
 * 
 * 遍历字符串，判断字符是否在滑动窗口数组里
      不在则 push 进数组
      在则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组
      然后将 max 更新为当前最长子串的长度
      遍历完，返回 max 即可
 * @param {*}
 * @return {*}
 */
const lengthOfLongestSubstring = (s) => {
	let arr = [];
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		let index = arr.indexOf(s[i]);
		if (index !== -1) {
			arr.splice(0, index + 1);
		}
		arr.push(s.charAt(i));
		max = Math.max(arr.length, max);
	}
	return max;
};

/**
 * @description: 时间复杂度O(n) 空间复杂度O(n)
 * 
 * 使用 map 来存储当前已经遍历过的字符，key 为字符，value 为下标
    使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标
    遍历字符串，判断当前字符是否已经在 map 中存在，存在则更新无重复子串开始下标 i 为相同字符的下一位置，此时从 i 到 j 为最新的无重复子串，更新 max ，将当前字符与下标放入 map 中
    最后，返回 max 即可

 * @param {*}
 * @return {*}
 */
const lengthOfLongestSubstring1 = (s) => {
	let map = new Map(),
		max = 0;
	for (let i = 0, j = 0; j < s.length; j++) {
		// 如果出现了重复字符，则把左指针移到重复字符的下一位。注意同时满足重复字符的索引大于左指针。
		if (map.has(s[j]) && map.get(s[j]) >= i) {
			i = map.get(s[j]) + 1; 
		}
		max = Math.max(max, j - i + 1);
		map.set(s[j], j);
	}
	return max;
};

let s = "abcaefghj";
const res = lengthOfLongestSubstring(s);
const res1 = lengthOfLongestSubstring1(s);
console.log(res, res1);
