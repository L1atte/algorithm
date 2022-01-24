/*
 * @Author: Latte
 * @Date: 2022-01-24 16:23:28
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-24 17:30:39
 * @FilePath: \algorithm\手写\trim.js
 */
String.prototype.trim = function () {
	return this.replace(/^\s+/, "").replace(/\s+$/, "");
};

let s = " dsadas ";
console.log(s);
s = s.trim();
console.log(s);
