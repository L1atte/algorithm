/*
 * @Author: Latte
 * @Date: 2022-02-07 22:27:35
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-07 22:35:29
 * @FilePath: \algorithm\151. 翻转字符串里的单词.js
 */
var reverseWords = function (s) {
	const arr = s.split(" ");

	const newArr = [];
	arr.forEach((e) => {
		if (e !== " ") {
			newArr.unshift(e);
		}
	});
	return newArr.join(" ");
};
