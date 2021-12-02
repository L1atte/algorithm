/*
 * @Author: Latte
 * @Date: 2021-12-03 01:30:58
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-03 01:32:30
 * @FilePath: \algorithm\simple promise\test.js
 */
const Promise = require("./promise");

Promise.defer = Promise.deferred = function () {
	let dfd = {};
	dfd.promise = new Promise((resolve, reject) => {
		dfd.resolve = resolve;
		dfd.reject = reject;
	});
	return dfd;
};

module.exports = Promise;
