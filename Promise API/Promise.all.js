const Promise = require("../simple promise/promise");

/*
 * @Author: Latte
 * @Date: 2021-12-03 12:32:58
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-03 14:13:53
 * @FilePath: \algorithm\Promise API\Promise.all.js
 */
function all(promises) {
	if (promises.length === 0) {
		return Promise.resolve([]);
	}

	let result = [],
		num = 0;

	return new Promise((resolve, reject) => {
		const check = () => {
			if (num === promises.length) {
				resolve(result);
			}
		};

		promises.forEach((item, index) => {
			Promise.resolve(item).then(
				(res) => {
					num++;
					result[index] = res;
					check();
				},
				(err) => {
					reject(err);
				}
			);
		});
	});
}
